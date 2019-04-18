module.exports = {
  root: true,
  extends: "eslint:recommended",
  env: {
    node: true,
    commonjs: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "no-console": "off",
  },
};
