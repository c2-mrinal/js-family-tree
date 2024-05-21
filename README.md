# JS Family Tree

Javascript library to create family hierarchy (compactable with all framework & libary).

## Overview

The Family Tree is a versatile JavaScript library for creating interactive family tree structures in a hierarchical
format. It is designed to be lightweight, easy to use, and compatible with any JavaScript framework. With this library,
you can visualize family relationships and genealogical data in an intuitive and visually appealing way.

## Features

- **Flexible Data Input**: Accepts data in object format, allowing you to define family relationships and hierarchy
  easily.
- **Framework Agnostic**: Works seamlessly with any JavaScript framework, including React, Angular, Vue.js, and more.
- **Customizable Styling**: Provides CSS classes for styling, allowing you to customize the appearance of the family
  tree to suit your needs.
- **Interactive Interface**: Supports interactive features such as collapsible nodes and tooltips for enhanced user
  experience.
- **Dynamic Rendering**: Dynamically renders the family tree structure based on the provided data, enabling real-time
  updates and modifications.

## Installation

You can install the Family Tree via npm:

```bash
npm install js-family-tree
```

## Data Passing Format

To use the js-family-tree library, you need to pass the family tree data in JSON format. Below is the structure of the JSON data and an example of how to integrate it with your library.

## JSON Data Structure

The JSON data should represent the family tree with nodes and relationships. Each person in the family tree is a node with specific attributes. Here's a sample structure:

```html
{ person: { name: "Father", gender: "Male", dob: "09/10/1998", dod: "till", img:
"https://yoururlofimage" }, spouse: { name: "Mother", gender: "Female", dob:
"09/10/1999", dod: "till", img: "https://yoururlofimage" }, children: [ {
person: { name: "Son", gender: "Male", dob: "", dod: "till", img:
"https://yoururlofimage" }, children: [ { person: { name: "Daughter", gender:
"Female", dob: "", dod: "till", img: "https://yoururlofimage" }, spouse: { name:
"Son-in-Law", gender: "Male", dob: "", dod: "till", img:
"https://yoururlofimage" }, children: [ { person: { name: "Him", gender: "Male",
dob: "", dod: "till", img: "https://yoururlofimage" }, spouse: { name: "Her",
gender: "female", dob: "", dod: "till", img: "https://yoururlofimage" },
children: [], }, { person: { name: "Him", gender: "Male", dob: "", dod: "till",
img: "path" }, spouse: { name: "Her", gender: "Female", dob: "", dod: "till",
img: "path" }, children: [], }, ], }, ], };
```

### Description of JSON Fields

- `id`: A unique identifier for each person in the family tree.
- `name`: The name of the person.
- `gender`: The gender of the person. It can be `"male"` or `"female"`.
- `spouse`: An object representing the person's spouse (if any), with similar attributes (`id`, `name`, `gender`).
- `children`: An array of objects representing the person's children, each with similar attributes (`id`, `name`, `gender`).

## Usage

- #### Import and use in a React/Next component: [example](https://stackblitz.com/edit/vitejs-vite-q6ko27?file=README.md)

```html
import { FamilyTree } from "js-family-tree"; const sampleData = {}; function
Dummy() { useEffect(() => { const familyTreeHtml = new FamilyTree(sampleData);
const familyTreeElement = document.getElementById("familyTree"); if
(familyTreeElement) familyTreeElement.innerHTML = familyTreeHtml.render(); },
[]); return (
<div>
  <div id="familyTree"></div>
</div>
); }
```

- #### Import and use in a Vanilla Javascript/Typescript component: [example](https://stackblitz.com/edit/vitejs-vite-rs3wja?file=main.js,index.html&terminal=dev)

_html file_

```html
<div id="familyTreeContainer"></div>
```

_js file_

```html
document.addEventListener('DOMContentLoaded', () => { const familyTree = new
FamilyTree({your data as object});
familyTree.render(document.getElementById('familyTreeContainer') ); });
```

## Documentation

Documentation is currently in progress. Please check back later for updates.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please
[open an issue](https://github.com/c2-mrinal/family-tree/issues) or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<!-- ## Acknowledgements

- Icon made by Freepik from [www.flaticon.com](https://www.flaticon.com/) -->
