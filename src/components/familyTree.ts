import "./style.css";
let familyTree: any;
interface Person {
	name: string;
	person: Person;
	img?: any;
	gender: string;
	dob: Date;
	dod?: any;
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

		const treeHTML = this.render(); // Re-render the family tree after toggling expansion
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
	card = (name: string, img: string, gender: string, dob: Date, dod: any) => {
		const date = new Date(),
			dobDate = new Date(dob),
			bYr = dobDate.getFullYear(),
			dodDate: any = new Date(dod);
		let dYr = dodDate.getFullYear();
		let age = dYr - bYr;

		if (dod === "till") {
			dYr = "Present";
			age = date.getFullYear() - bYr;
		}
		// console.log(bYr, dYr);
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
		// typeod dod === Date ?
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
	private renderNode(person: Person, depth: number = 0): string {
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
                <span class="expand-icon ${person.expanded ? "expand-icon-open" : ""} ">${
			isChild ? expandIcon : ""
		}</span>
			${
				spouse
					? `<div class="sub-container" onclick="toggleNodeExpansion(${depth})"> ${this.card(
							spouse.name,
							spouse.img,
							spouse.gender,
							spouse.dob,
							spouse.dod
					  )} </div>`
					: ""
			}
                        
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

export function createFamilyTree(data: Person): string {
	familyTree = new FamilyTree(data);
	return familyTree.render();
}
