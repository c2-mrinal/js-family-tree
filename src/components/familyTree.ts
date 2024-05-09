import "./style.css";
let familyTree;
interface Person {
	name: string;
    person: Person;
    img?:string;
    gender?:string;
    dob?:Date;
	spouse?: Person;
	children?: Person[];
	expanded?: boolean;
}

class FamilyTree {
	private root: Person;

	constructor(data: Person) {
		this.root = data;
	}

	// Function to toggle the expanded state of a node based on its depth
	public toggleNodeExpansion(depth: number): void {
		this.traverseAndToggleExpansion(this.root, depth);
		// Re-render the family tree after toggling expansion
		const treeHTML = this.render();
		const familyTreeElement = document.getElementById("familyTree");
		if (familyTreeElement) familyTreeElement.innerHTML = treeHTML;
	}

	private traverseAndToggleExpansion(person: Person, depth: number): void {
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
	card = (name: string, img: string, gender: string, dob: Date, death: any) => {
		const age = 100;
        const dobYr = new Date(dob);
        const dYr = new Date(death);
        const date = new Date();
        console.log(dobYr.getFullYear(), date.getFullYear());
        
		// typeod death === Date ?
		return ` <div class="card">
        <div class="image-container">
            <img src="${img?img:"https://www.svgrepo.com/show/483912/person.svg"}" alt="Profile Image">
        </div>
        <div class="name">${name}</div>
        <div class="age"><b>${1949} - ${2049} </b> (${age} yrs) </div>
    </div>`;
	};
	// Recursive function to render the family tree structure as HTML
	private renderNode(person: Person, depth: number = 0): string {
		const margin = depth * 20;
		const expandIcon = person.expanded ? "&#94;" : "&#8964;";
		const childrenStyle = person.expanded ? "" : "display: none;";
        const isChild = person.children?.length
		const childrenHTML = person.children?.map((child) => this.renderNode(child, depth + 1)).join("");
		const detail = person?.person;
        const spouse = person?.spouse

		return `
            <div class="person" style="margin-left: ${margin}px;">
                <div class="person-container" >
                    <div class="ps-contain">
                        <div class="sub-container" onclick="toggleNodeExpansion(${depth})">
                            ${this.card(detail.name, detail.img, detail.gender, detail.dob, detail.death)}
                        </div>
                <span class="expand-icon">${isChild ?expandIcon : ""}</span>

                        <div class="sub-container" onclick="toggleNodeExpansion(${depth})">
                            ${person.spouse ? this.card(spouse.name, spouse.img, spouse.gender, spouse.dob, spouse.death) : ""}
                        </div>
                    </div>
                </div>
                <div class="children" style="${childrenStyle}">
                    ${isChild && childrenHTML}
                </div>
            </div>
        `;
	}

	// Function to call the recursive render function and return the complete HTML
	public render(): string {
		return this.renderNode(this.root);
	}
}

// Global function to toggle node expansion
window.toggleNodeExpansion = (depth: number) => {
	familyTree.toggleNodeExpansion(depth);
};

export  function createFamilyTree(data: Person): string {

    familyTree = new FamilyTree(data);
	return familyTree.render();
}




