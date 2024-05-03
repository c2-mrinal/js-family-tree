declare class TreeNode {
    value: any;
    children: TreeNode[];
    constructor(value: any);
}
declare class Tree {
    root: TreeNode | null;
    constructor();
    addNode(parent: TreeNode | null, value: any): TreeNode;
    render(element: HTMLElement): void;
    private renderTree;
}

export { Tree as default };
