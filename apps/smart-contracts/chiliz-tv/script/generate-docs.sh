#!/usr/bin/env bash
# Generates docs/reference from the NatSpec in src/, ready to browse on GitHub.
#
# `forge doc` alone is not enough here: its "Git Source" links ignore the
# monorepo layout, its links use backslashes on Windows, and its cross-links
# start from the root of the book instead of the file.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=docs/reference
rm -rf "$OUT"

# Tests are not documented, so a broken local test must not block generation.
FOUNDRY_TEST=src forge doc

# Assets only used when serving the book. `forge doc --serve` writes its own.
rm -f "$OUT/book.css" "$OUT/book.toml" "$OUT/solidity.min.js" "$OUT/.gitignore"

find "$OUT/src" -name '*.md' -print0 | while IFS= read -r -d '' file; do
  relative=$(dirname "${file#"$OUT"/src/}")
  if [ "$relative" = "." ]; then
    up="."
  else
    up=$(printf '%s' "$relative" | sed -E 's#[^/]+#..#g')
  fi
  sed -i -E \
    -e '/^\[Git Source\]/d' \
    -e '/\]\(/s#\\#/#g' \
    -e "s#\]\(/#](${up}/#g" \
    "$file"
done

# The home page is a copy of the README, whose links start from the project root.
sed -i -E 's#\]\(docs/#](../../#g' "$OUT/src/README.md"
