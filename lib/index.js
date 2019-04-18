const { gitDescribeSync } = require("git-describe");

module.exports = function() {
  return function GitDescribePlugin(tree) {
    const gitInfo = gitDescribeSync({ longSemver: true });
    tree.match({ tag: "html" }, node => {
      node.attrs = Object.assign(node.attrs || {}, {
        "data-git-describe": gitInfo.toString(),
      });
      return node;
    });
    return tree;
  };
};
