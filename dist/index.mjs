// src/components/familyTree.ts
var TreeNode = class {
  value;
  children;
  constructor(value) {
    this.value = value;
    this.children = [];
  }
};
var Tree = class {
  root;
  constructor() {
    this.root = null;
  }
  // Method to add a node to the tree
  addNode(parent, value) {
    const newNode = new TreeNode(value);
    if (parent === null) {
      this.root = newNode;
    } else {
      parent.children.push(newNode);
    }
    return newNode;
  }
  // Method to render the tree as HTML
  render(element) {
    if (!this.root)
      return;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.textContent = this.root.value;
    ul.appendChild(li);
    this.renderTree(this.root, li);
    element.appendChild(ul);
  }
  // Helper method to render the tree recursively
  renderTree(node, parentElement) {
    if (node.children.length === 0)
      return;
    const ul = document.createElement("ul");
    node.children.forEach((child) => {
      const li = document.createElement("li");
      li.textContent = child.value;
      ul.appendChild(li);
      this.renderTree(child, li);
    });
    parentElement.appendChild(ul);
  }
};

// src/index.ts
var src_default = Tree;
export {
  src_default as default
};
