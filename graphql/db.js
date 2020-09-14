export const people = [
  {
    id: "1",
    name: "yejiiha",
    age: 24,
    gender: "female",
  },
  {
    id: "2",
    name: "ans",
    age: 20,
    gender: "male",
  },
  {
    id: "3",
    name: "rascal",
    age: 23,
    gender: "male",
  },
  {
    id: "4",
    name: "super",
    age: 20,
    gender: "female",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === people.id);
  return filteredPeople[0];
};
