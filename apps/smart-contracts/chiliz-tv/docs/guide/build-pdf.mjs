#!/usr/bin/env node
// Turns every docs/guide/NN-*.md into a PDF with its Mermaid diagrams drawn.
//
//   node docs/guide/build-pdf.mjs            # PDFs in docs/guide/pdf/
//   node docs/guide/build-pdf.mjs --out dir
//
// Needs Node 22+ and a local Chrome, Edge or Chromium (set CHROME_PATH if it is
// not found). Nothing to install: the page loads marked and mermaid from
// jsdelivr at pinned versions, and Chrome prints it through the DevTools protocol.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, mkdtempSync, rmSync, existsSync } from 'node:fs';
import { spawn, execSync } from 'node:child_process';
import { join, dirname, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { setTimeout as sleep } from 'node:timers/promises';

const here = dirname(fileURLToPath(import.meta.url));
const outIdx = process.argv.indexOf('--out');
const outDir = resolve(outIdx > 0 ? process.argv[outIdx + 1] : join(here, 'pdf'));

const MARKED = 'https://cdn.jsdelivr.net/npm/marked@12.0.2/marked.min.js';
const MERMAID = 'https://cdn.jsdelivr.net/npm/mermaid@11.4.1/dist/mermaid.min.js';

function findBrowser() {
  const candidates = [
    process.env.CHROME_PATH,
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ].filter(Boolean);
  const found = candidates.find((p) => existsSync(p));
  if (!found) throw new Error('No Chrome, Edge or Chromium found: set CHROME_PATH');
  return found;
}

function gitVersion() {
  try {
    return execSync('git rev-parse --short HEAD', { cwd: here }).toString().trim();
  } catch {
    return '';
  }
}

function page(md, title) {
  const today = new Date().toISOString().slice(0, 10);
  const version = gitVersion();
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>${title}</title>
<script src="${MARKED}"></script>
<script src="${MERMAID}"></script>
<style>
  @page { size: A4; margin: 18mm 16mm 20mm 16mm; }
  :root { --ink:#1b2733; --muted:#5b6b7c; --line:#d9e0e8; --brand:#1f3a5f; --accent:#c8102e; --soft:#f3f6fa; }
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: "Segoe UI", Inter, "Helvetica Neue", Arial, sans-serif; color: var(--ink);
         font-size: 10.5pt; line-height: 1.5; margin: 0; }
  .cover { height: 245mm; display: flex; flex-direction: column; justify-content: center;
           border-left: 6px solid var(--accent); padding-left: 14mm; page-break-after: always; }
  .cover .kicker { color: var(--accent); font-weight: 700; letter-spacing: .08em; text-transform: uppercase; font-size: 10pt; }
  .cover h1 { font-size: 30pt; line-height: 1.15; margin: 6mm 0 4mm; color: var(--brand); border: 0; }
  .cover .sub { font-size: 13pt; color: var(--muted); max-width: 150mm; }
  .cover .meta { margin-top: 18mm; color: var(--muted); font-size: 9.5pt; }
  .toc { page-break-after: always; }
  .toc h2 { margin-top: 0; }
  .toc ol { padding-left: 6mm; }
  .toc li { margin: 1.5mm 0; }
  .toc a { color: var(--ink); text-decoration: none; }
  h1 { display: none; }
  h2 { color: var(--brand); font-size: 16pt; margin: 9mm 0 3mm; padding-bottom: 1.5mm;
       border-bottom: 2px solid var(--line); page-break-after: avoid; }
  h2.newpage { page-break-before: always; margin-top: 0; }
  h3 { color: var(--brand); font-size: 12pt; margin: 6mm 0 2mm; page-break-after: avoid; }
  h4 { font-size: 10.5pt; margin: 4mm 0 1mm; page-break-after: avoid; }
  p, li { orphans: 3; widows: 3; }
  a { color: var(--brand); }
  code { font-family: Consolas, "SFMono-Regular", Menlo, monospace; font-size: 9pt;
         background: var(--soft); padding: 0 1.2mm; border-radius: 3px; }
  pre { background: var(--soft); border: 1px solid var(--line); border-radius: 4px; padding: 3mm;
        overflow: hidden; white-space: pre-wrap; word-break: break-all; page-break-inside: avoid; }
  pre code { background: none; padding: 0; font-size: 8.6pt; }
  table { border-collapse: collapse; width: 100%; margin: 3mm 0 4mm; font-size: 9pt; page-break-inside: auto; }
  tr { page-break-inside: avoid; }
  th { background: var(--brand); color: #fff; text-align: left; font-weight: 600; }
  th, td { border: 1px solid var(--line); padding: 1.6mm 2.2mm; vertical-align: top; }
  tbody tr:nth-child(even) td { background: #fafbfd; }
  td code { word-break: normal; overflow-wrap: anywhere; }
  blockquote { margin: 4mm 0; padding: 2.5mm 4mm; background: #fff7e6; border-left: 4px solid #f0a000;
               border-radius: 0 4px 4px 0; page-break-inside: avoid; }
  blockquote p { margin: 1mm 0; }
  .diagram { margin: 4mm 0 5mm; text-align: center; page-break-inside: avoid; }
  .diagram svg { max-width: 100%; height: auto; }
  hr { border: 0; border-top: 1px solid var(--line); margin: 6mm 0; }
</style></head>
<body><div id="doc"></div>
<script id="md" type="text/markdown">${md.replace(/<\/script/gi, '<\\/script')}</script>
<script>
mermaid.initialize({
  startOnLoad: false, securityLevel: 'loose', theme: 'base',
  themeVariables: {
    primaryColor: '#e8f0fb', primaryBorderColor: '#1f3a5f', primaryTextColor: '#1b2733',
    secondaryColor: '#fdecee', tertiaryColor: '#f3f6fa', lineColor: '#4a5b6e',
    fontFamily: 'Segoe UI, Inter, Arial, sans-serif', fontSize: '14px',
    actorBkg: '#e8f0fb', actorBorder: '#1f3a5f', noteBkgColor: '#fff7e6', noteBorderColor: '#f0a000',
    edgeLabelBackground: '#ffffff',
    xyChart: { plotColorPalette: '#1f3a5f, #c8102e, #f0a000, #3a8d5c, #7a4fa0' },
    pie1: '#1f3a5f', pie2: '#c8102e', pie3: '#f0a000', pie4: '#3a8d5c', pie5: '#7a4fa0',
  },
  flowchart: { curve: 'basis', padding: 12 },
  sequence: { mirrorActors: false, showSequenceNumbers: true },
});

(async () => {
  try {
    const src = document.getElementById('md').textContent;
    const lines = src.split('\\n');
    const title = (lines.find((l) => l.startsWith('# ')) || '# ').slice(2);
    const subLine = lines.find((l) => l.startsWith('> '));
    const sub = subLine ? subLine.slice(2) : '';
    const body = src.replace(/^# .*\\n/m, '').replace(subLine ? subLine + '\\n' : '', '');
    const doc = document.getElementById('doc');
    doc.innerHTML =
      '<section class="cover"><div class="kicker">PredCast · Smart contracts</div>' +
      '<h1 style="display:block">' + title + '</h1><div class="sub">' + marked.parseInline(sub) + '</div>' +
      '<div class="meta">${today}${version ? ' · version ' + version : ''}</div></section>' +
      '<section class="toc"><h2>Sommaire</h2><ol id="toc"></ol></section>' +
      '<main>' + marked.parse(body, { gfm: true }) + '</main>';

    // Mermaid blocks
    let n = 0;
    for (const code of doc.querySelectorAll('pre > code.language-mermaid')) {
      const div = document.createElement('div');
      div.className = 'diagram';
      const { svg } = await mermaid.render('d' + n++, code.textContent);
      div.innerHTML = svg;
      code.parentElement.replaceWith(div);
    }

    // Table of contents. A "<!-- newpage -->" line before a "## " heading
    // starts that section on a new page.
    const toc = document.getElementById('toc');
    doc.querySelectorAll('main h2').forEach((h, i) => {
      h.id = 's' + i;
      let prev = h.previousSibling;
      while (prev && prev.nodeType === 3 && !prev.textContent.trim()) prev = prev.previousSibling;
      if (prev && prev.nodeType === 8 && prev.textContent.trim() === 'newpage') h.classList.add('newpage');
      const li = document.createElement('li');
      li.innerHTML = '<a href="#s' + i + '">' + h.textContent + '</a>';
      toc.appendChild(li);
    });
    document.title = title;
    window.__ready = true;
  } catch (e) {
    window.__error = String(e && e.message || e);
  }
})();
</script></body></html>`;
}

class Cdp {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.id = 0;
    this.pending = new Map();
    this.ws.onmessage = (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve: ok, reject: ko } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? ko(new Error(msg.error.message)) : ok(msg.result);
      }
    };
  }
  open() {
    return new Promise((ok, ko) => {
      this.ws.onopen = ok;
      this.ws.onerror = ko;
    });
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params, sessionId }));
    return new Promise((ok, ko) => this.pending.set(id, { resolve: ok, reject: ko }));
  }
}

async function main() {
  const docs = readdirSync(here).filter((f) => /^\d\d-.*\.md$/.test(f)).sort();
  if (!docs.length) throw new Error('No NN-*.md file in ' + here);
  mkdirSync(outDir, { recursive: true });

  const profile = mkdtempSync(join(tmpdir(), 'guide-pdf-'));
  const browser = spawn(findBrowser(), [
    '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
  ], { stdio: 'ignore' });

  try {
    let portFile = join(profile, 'DevToolsActivePort');
    for (let i = 0; i < 100 && !existsSync(portFile); i++) await sleep(100);
    const [port, path] = readFileSync(portFile, 'utf8').trim().split('\n');
    const cdp = new Cdp(`ws://127.0.0.1:${port}${path}`);
    await cdp.open();

    for (const file of docs) {
      const md = readFileSync(join(here, file), 'utf8').replace(/\r\n/g, '\n');
      const title = (md.match(/^# (.*)$/m) || [, file])[1];
      const html = join(profile, file.replace(/\.md$/, '.html'));
      writeFileSync(html, page(md, title));

      const { targetId } = await cdp.send('Target.createTarget', { url: 'about:blank' });
      const { sessionId } = await cdp.send('Target.attachToTarget', { targetId, flatten: true });
      await cdp.send('Page.enable', {}, sessionId);
      await cdp.send('Page.navigate', { url: pathToFileURL(html).href }, sessionId);

      let state = '';
      for (let i = 0; i < 600 && !state; i++) {
        await sleep(100);
        const { result } = await cdp.send('Runtime.evaluate', {
          expression: 'window.__error ? "error: " + window.__error : (window.__ready ? "ready" : "")',
          returnByValue: true,
        }, sessionId);
        state = result.value || '';
      }
      if (state !== 'ready') throw new Error(`${file}: ${state || 'timed out'}`);

      const footer = `<div style="font-size:7.5px;width:100%;padding:0 16mm;display:flex;justify-content:space-between;color:#8592a0;font-family:Segoe UI,Arial">
        <span>PredCast · ${title}</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
      const { data } = await cdp.send('Page.printToPDF', {
        printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true,
        headerTemplate: '<div></div>', footerTemplate: footer,
      }, sessionId);
      const pdf = join(outDir, file.replace(/\.md$/, '.pdf'));
      writeFileSync(pdf, Buffer.from(data, 'base64'));
      console.log('wrote', pdf);
      await cdp.send('Target.closeTarget', { targetId });
    }
    await cdp.send('Browser.close').catch(() => {});
  } finally {
    browser.kill();
    await sleep(300);
    try { rmSync(profile, { recursive: true, force: true }); } catch {}
  }
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
