const { gitDescribeSync } = require("git-describe");

module.exports = function(options) {
  return function GitDescribePlugin(tree) {
    const gitInfo = gitDescribeSync(options);
    tree.match({ tag: "html" }, node => {
      node.attrs = Object.assign(node.attrs || {}, {
        "data-git-describe": gitInfo.toString(),
      });
      return node;
    });
    return tree;
  };
};
