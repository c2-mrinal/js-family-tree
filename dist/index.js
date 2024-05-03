"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);

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
