import { FamilyTree } from '../src/index'

test('add', () => {
  expect(new FamilyTree({
    person: { name: "Father", gender: "Male", dob: "09/10/1998", dod: "till", img: "" },
	spouse: { name: "Mother", gender: "Female", dob: "09/10/1999", dod: "till", img: "" },
	children: []
}).render()
  })