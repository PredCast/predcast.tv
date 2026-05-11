import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off', // Allow console in backend
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },

  // Forbid direct wall-clock access in production layers. Use the injected
  // IClock port instead — see packages/domain/src/shared/ports/IClock.ts.
  // `new Date(arg)` (parsing) and `new Date(year, month, day)` (construction)
  // remain allowed; only the zero-arg `new Date()` and `Date.now()` are flagged.
  {
    files: [
      'src/application/**/*.ts',
      'src/infrastructure/**/*.ts',
      'src/presentation/**/*.ts',
      'index.ts',
    ],
    ignores: [
      '**/__tests__/**',
      'src/testing/**',
      'src/infrastructure/clock/**',
    ],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: "NewExpression[callee.name='Date'][arguments.length=0]",
          message: 'Use IClock.now() instead — see packages/domain/src/shared/ports/IClock.ts',
        },
        {
          selector: "CallExpression[callee.object.name='Date'][callee.property.name='now']",
          message: 'Use IClock.now().getTime() instead',
        },
      ],
    },
  },

  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.js',
      'eslint.config.mjs',
      'scripts/**',
      'public/**',
    ],
  }
);