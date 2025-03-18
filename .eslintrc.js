module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:security/recommended-legacy',
    'plugin:promise/recommended',
    'plugin:node/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // 'max-len': [2, { code: 120 }],
    // 'max-params': [2, 5],
    // 'curly': [2, 'all'],
    // 'quote-props': [2, 'consistent-as-needed'],
    // 'no-console': 2,
    // 'no-unused-vars': [2, { args: 'all', argsIgnorePattern: '^_' }],
    // 'no-param-reassign': [2, { props: false }],
    // 'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    // 'node/no-unpublished-require': [2, {
    //   allowModules: [
    //     'swagger-jsdoc', 'swagger-ui-express',
    //   ],
    // }],
  },
};
