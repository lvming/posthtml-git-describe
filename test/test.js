const { expect } = require("chai");
const posthtml = require("posthtml");
const plugin = require("..");

describe("test", () => {
  it("test", async () => {
    const html = `<html></html>`;
    const result = await posthtml([plugin()]).process(html);
    const root = result.tree[0];
    expect(root).to.be.ok;
    expect(root.tag).to.equal("html");
    expect(root.attrs).to.have.property("data-git-describe").that.is.not.empty;
  });
});
