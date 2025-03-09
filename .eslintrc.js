module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks'],
  rules: {
    // 在这里添加或覆盖规则
    'react/react-in-jsx-scope': 'off', // 如果你使用 React 17+，可以关闭这个规则
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 如果你不想强制要求函数返回值类型
    'no-unused-vars': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'vars': 'all', // 检查所有变量
        'args': 'none', // 忽略函数参数
        'ignoreRestSiblings': true, // 忽略对象解构中的剩余变量
        'varsIgnorePattern': '^_', // 忽略以下划线开头的变量
        'argsIgnorePattern': '^_' // 忽略函数中以下划线开头的参数
      }
    ],

    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single']
  },
  settings: {
    react: {
      version: 'detect', // 自动检测 React 版本
    },
  },
}
