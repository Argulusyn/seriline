module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "plugin:vue-types/strongly-recommended",
    "prettier/vue"
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".json", ".vue"]
      }
    }
  },
  plugins: ["vue", "prettier"],
  rules: {
    "generator-star-spacing": 0,
    "arrow-parens": ["error", "as-needed"],
    "max-len": 0,
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "comma-dangle": ["error", "never"],
    "padded-blocks": ["error", "never"],
    "consistent-return": 0,
    "newline-before-return": "error",
    "global-require": 0,
    "newline-after-var": ["error", "always"],
    "no-param-reassign": 0,
    "no-prototype-builtins": 0,
    "object-curly-newline": 0,
    "operator-linebreak": 0,
    "no-restricted-globals": 0,
    "implicit-arrow-linebreak": 0,
    "import/no-dynamic-require": 0,
    "import/no-cycle": 1,
    "vue/order-in-components": [
      "error",
      {
        order: [
          "el",
          "name",
          "parent",
          "functional",
          ["delimiters", "comments"],
          ["components", "directives", "filters"],
          "extends",
          "mixins",
          "inheritAttrs",
          "model",
          ["props", "propsData"],
          "data",
          "computed",
          "watch",
          "LIFECYCLE_HOOKS",
          "methods",
          ["template", "render"],
          "renderError"
        ]
      }
    ],
    "vue/no-parsing-error": 1
  }
};
