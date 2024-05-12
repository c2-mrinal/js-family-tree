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
var familyTree;
var FamilyTree = class {
  root;
  constructor(data) {
    this.root = data;
  }
  // Function to toggle the expanded state of a node based on its depth
  toggleNodeExpansion(depth) {
    this.traverseAndToggleExpansion(this.root, depth);
    const treeHTML = this.render();
    const familyTreeElement = document.getElementById("familyTree");
    if (familyTreeElement)
      familyTreeElement.innerHTML = treeHTML;
  }
  traverseAndToggleExpansion(person, depth) {
    if (depth === 0) {
      person.expanded = !person.expanded;
      return;
    }
    if (person.children) {
      for (const child of person.children) {
        this.traverseAndToggleExpansion(child, depth - 1);
      }
    }
  }
  card = (name, img, gender, dob, dod) => {
    const date = /* @__PURE__ */ new Date(), dobDate = new Date(dob), bYr = dobDate.getFullYear(), dodDate = new Date(dod);
    let dYr = dodDate.getFullYear();
    let age = dYr - bYr;
    if (dod === "till") {
      dYr = "Present";
      age = date.getFullYear() - bYr;
    }
    let genIcon = "?";
    switch (gender.toLowerCase()) {
      case "male":
        genIcon = "&#9794";
        break;
      case "female":
        genIcon = "&#9792";
        break;
      default:
        break;
    }
    console.log(genIcon);
    return ` 
		<div class="card">
		<div class="gender"> ${genIcon}</div>
			<div class="image-container">
				<img src="${img ? img : "https://www.svgrepo.com/show/483912/person.svg"}" alt="Profile Image">
			</div>
			<div class="name">${name}</div>
			<div class="age"> <span><b>${bYr} - ${dYr}</b> </span><span> (${age || 0} yrs)</span> </div>
    	</div>`;
  };
  // Recursive function to render the family tree structure as HTML
  renderNode(person, depth = 0) {
    const margin = depth * 20;
    const expandIcon = person.expanded ? "&#94;" : "&#8964;";
    const childrenStyle = person.expanded ? "" : "display: none;";
    const isChild = person.children?.length;
    const childrenHTML = person.children?.map((child) => this.renderNode(child, depth + 1)).join("");
    const detail = person?.person;
    const spouse = person?.spouse;
    return `
            <div class="person" style="margin-left: ${margin}px;">
                <div class="person-container" >
                    <div class="ps-contain">
                        <div class="sub-container" onclick="toggleNodeExpansion(${depth})">
                            ${detail && this.card(detail.name, detail.img, detail.gender, detail.dob, detail.dod)}
                        </div>
                <span class="expand-icon ${person.expanded ? "expand-icon-open" : ""} ">${isChild ? expandIcon : ""}</span>
			${spouse ? `<div class="sub-container" onclick="toggleNodeExpansion(${depth})"> ${this.card(
      spouse.name,
      spouse.img,
      spouse.gender,
      spouse.dob,
      spouse.dod
    )} </div>` : ""}
                        
                    </div>
                </div>
                <div class="children" style="${childrenStyle}">
                    ${isChild && childrenHTML}
                </div>
            </div>
        `;
  }
  // Function to call the recursive render function and return the complete HTML
  render() {
    return this.renderNode(this.root);
  }
};
window.toggleNodeExpansion = (depth) => {
  familyTree.toggleNodeExpansion(depth);
};
function createFamilyTree(data) {
  familyTree = new FamilyTree(data);
  return familyTree.render();
}

// src/index.ts
var src_default = createFamilyTree;
