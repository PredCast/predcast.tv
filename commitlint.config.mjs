// Conventional Commits enforcement for PR titles.
// Scopes mirror the CLAUDE.md naming rules.

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      ['backend', 'frontend', 'landing', 'contracts', 'infra', 'docs'],
    ],
  },
};
