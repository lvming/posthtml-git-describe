module.exports = {
  hooks: {
    "pre-commit": "pretty-quick --staged && npm run lint && npm test",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
  },
};
