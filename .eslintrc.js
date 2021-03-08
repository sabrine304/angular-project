module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: { '@typescript-eslint/no-var-requires': 'off' },
    },
  ],
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  rules: {
    'no-return-await': ['error'],
    'key-spacing': ['error'],
    'function-call-argument-newline': ['error', 'consistent'],
    'max-len': [2, 140, 2, { 'ignoreTemplateLiterals': true, 'ignoreStrings': true, 'ignoreTrailingComments': true }],
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'no-public',
          methods: 'explicit',
          parameterProperties: 'explicit',
        },
      },
    ],
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-use-before-define': [1, { 'functions': false }],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/no-namespace': 0,
    'quotes': ['error', 'single'],
    'spaced-comment': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
    'object-curly-newline': ['error', { 'consistent': true, 'multiline': true }],
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/indent': ['error', 2, { 'MemberExpression': 0, 'SwitchCase': 1 }],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'import/named': 'off',
    'import/namespace': 'off',
    'indent': 'off',
    'lines-between-class-members': ['error', 'always', { 'exceptAfterSingleLine': true }],
    'no-await-in-loop': 2,
    'no-duplicate-imports': 1,
    'no-prototype-builtins': 'off',
    'no-multiple-empty-lines': [
      'error',
      { max: 1 },
    ],
    'no-trailing-spaces': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { 'vars': 'local', 'args': 'none' }],
    'space-in-parens': ['error', 'never'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
      { blankLine: 'always', prev: '*', next: 'for' },
      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: '*', next: 'try' },
    ],
    semi: ['error', 'always'],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'pathGroups': [
          {
            pattern: '@myre/**',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'express**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'sequelize**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'lodash**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'moment**',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '../../../../**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '../../../**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '../../**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '../**',
            group: 'parent',
            position: 'before',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
      },
    ],
  },
};

