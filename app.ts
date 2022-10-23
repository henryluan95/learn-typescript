enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Henry",
  age: 30,
  hobbies: ["eat", "sleep", "laugh"],
  role: Role.ADMIN,
};

console.log(person.name);
