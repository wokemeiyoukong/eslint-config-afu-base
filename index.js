module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  rules: {
    /**
     * "off" 或 0 - 关闭规则
     * "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
     * "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
     */
    // eslint 规则
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': [
      2,
      { vars: 'local', args: 'none', varsIgnorePattern: '[iI]gnored' }
    ],
    //不允许变量在定义块的外部使用
    'block-scoped-var': 'error',
    // 默认缩进2，忽略模板字符串
    indent: [
      'error',
      2,
      { ignoredNodes: ['VariableDeclaration[declarations.length=0]'] }
    ],
    //默认使用单引号
    quotes: [2, 'single'],
    'no-empty': 'off',
    // "semi": ["error", "always", { "omitLastInOneLineBlock": true}],
    // 双峰驼命名格式
    camelcase: [
      2,
      {
        properties: 'always'
      }
    ],
    // prettier 规则
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        endOfLine: 'auto',
        semi: true,
        trailingComma: 'none',
        arrowParens: 'avoid',
        useTabs: false,
        bracketSpacing: true,
        proseWrap: 'always'
      }
    ],
    //嵌套深度
    'max-depth': ['error', 6],
    //const定义不允许修改
    'no-const-assign': 'error',
    //循环中不能使用await
    'no-await-in-loop': 'error',
    //未声明变量直接引用
    'no-undef': 'error',
    'no-useless-escape': 0,
    //函数名或关键字与左括号不要空格
    'space-before-function-paren': 0,
    // 只有一个export必须使用default
    'import/prefer-default-export': 0,
    // 非生产依赖无法import
    'import/no-extraneous-dependencies': 0,
    // import需要新开一行
    'import/newline-after-import': 0,
    'import/no-unresolved': 0,
    // function必须设置name
    'func-names': 0,
    // 未改变对象必须使用const
    'prefer-const': 0,
    // 带变量拼接必须使用模板字符串
    'prefer-template': 0,
    // 不要再普通字符串中使用变量语法
    'no-template-curly-in-string': 0,
    // 不能使用++
    'no-plusplus': 0,
    // 引入文件必须带后缀
    'import/extensions': 0,
    // 省略严格模式声明
    strict: 0,
    // 指令周围必须带换行
    'lines-around-directive': 0,
    // 引入顺序
    'import/order': 0,
    'no-shadow': 0,
    // 函数入参不可修改
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'global-require': 0,
    'dot-notation': 0,
    'no-restricted-syntax': 0
  }
};
