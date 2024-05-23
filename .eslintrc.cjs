module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react-hooks/recommended",
    "plugin:oxlint/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
      },
    ],
    // let变量未被赋值
    "prefer-const": ["error"],

    // 禁止修改const值
    "no-const-assign": ["error"],

    // 使用let, const而不是var
    "no-var": ["error"],
    
    // 如果if总是执行return，则不需要后续的else
    "no-else-return": ["error", { allowElseIf: true }],

    // 操作符前后加空格
    "space-infix-ops": ["error"],

    // 链式调用需使用换行
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 3 }],

    // 块开头和结尾需要空白
    "block-spacing": ["error", "always"],

    // 属性两边是否带空格,[ a ]和[a],当前选择后者规则
    "computed-property-spacing": ["error", "never"],

    // 调用方法的名字和括号之间不允许有空格，f ()和f()，后者正确
    "func-call-spacing": ["error", "never"],

    // 语句结尾不许有无用的空格
    "no-trailing-spaces": ["error"],

    // 语句之间不允许多个空白行
    "no-multiple-empty-lines": ["error", { max: 2 }],

    // 换行风格
    "linebreak-style": ["error", "unix"],

    // 分号结尾
    semi: ["error", "always"],

    // 条件中混合有多个运算时，使用括号分隔
    "no-mixed-operators": [
      "error",
      {
        groups: [
          ["+", "-", "*", "/", "%", "**"],
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
        ],
        allowSamePrecedence: true,
      },
    ],

    // 类型定义要以分号结尾
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "semi",
          requireLast: true,
        },
      },
    ],
    // 函数声明括号后面的空格
    "space-before-blocks": [
      "error",
      {
        functions: "always",
        keywords: "always",
        classes: "always",
      },
    ],

    // 函数声明括号前面的空格
    "space-before-function-paren": [
      "error",
      {
        anonymous: "never", // function() {}
        named: "never", // function foo() {}
        asyncArrow: "always", // async () => {}
      },
    ],

    // 禁止不同类型间的 + 操作符
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        checkCompoundAssignments: true,
      },
    ],

    // 禁止返回状态未定的promise，异常情况下容易处理容易出错
    "@typescript-eslint/return-await": ["error", "always"],

    // 需要在类型注释周围保持一致的间距
    "@typescript-eslint/type-annotation-spacing": ["error"],

    // infix 运算符两侧有空白（如，联合类型的|两侧，enum的=两侧）
    "@typescript-eslint/space-infix-ops": ["error"],

    // 禁止导入自己
    "import/no-self-import": ["error"],

    // 在导入和需求语句中防止不必要的路径段（规范路径）
    "import/no-useless-path-segments": ["error"],

    // 禁止通过相对路径导入包
    "import/no-relative-packages": ["error"],

    // 报告循环依赖
    "import/no-cycle": ["error", { maxDepth: 1 }],

    // 报告未在 `package.json` 中显式列出的包
    "import/no-extraneous-dependencies": ["error"],
  },
};
