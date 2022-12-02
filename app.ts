// const person: { name: string; age: number } = {
//   name: "Henry",
//   age: 30,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Henry",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

console.log(person);
