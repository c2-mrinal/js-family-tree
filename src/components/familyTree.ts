class TreeNode {
    value: any;
    children: TreeNode[];

    constructor(value: any) {
        this.value = value;
        this.children = [];
    }
}

export default class Tree {
    root: TreeNode | null;

    constructor() {
        this.root = null;
    }

    // Method to add a node to the tree
    addNode(parent: TreeNode | null, value: any): TreeNode {
        const newNode = new TreeNode(value);
        if (parent === null) {
            this.root = newNode;
        } else {
            parent.children.push(newNode);
        }
        return newNode;
    }

    // Method to render the tree as HTML
    render(element: HTMLElement) {
        if (!this.root) return;
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        li.textContent = this.root.value;
        ul.appendChild(li);
        this.renderTree(this.root, li);
        element.appendChild(ul);
    }

    // Helper method to render the tree recursively
    private renderTree(node: TreeNode, parentElement: HTMLElement) {
        if (node.children.length === 0) return;
        const ul = document.createElement('ul');
        node.children.forEach(child => {
            const li = document.createElement('li');
            li.textContent = child.value;
            ul.appendChild(li);
            this.renderTree(child, li);
        });
        parentElement.appendChild(ul);
    }
}
