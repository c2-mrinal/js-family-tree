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
declare function createFamilyTree(data: Person): string;

export { createFamilyTree as default };
