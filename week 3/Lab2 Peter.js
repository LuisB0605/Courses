//  ARRAYS

// defining the list
let names = ["Peter", "Maurice", "Joselito"];
console.log(names);

// adding items to the list
names.push("Jose");
names.push("Luis");
names.push("Leonel");

console.log(names);

// print out position/index 4 from the list
console.log(names[4]);
console.log(names.length);

// loop through a list
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// BONUS LECTURE

// String interpolation
for (let i = 0; i < names.length; i++) {
  console.log(`name: ${names[i]}`);
}

// OBJECTS

let student = {
  name: "Peter Gatsby",
  education: "ABCO Technology",
  major: "Computer Science",
  greet: () => {
    console.log("Hello I am a student");
  },
};

console.log(student);

console.log(student["major"]);

// add items into objects

student["gpa"] = 4.0;
student.location = "Los Angeles";

console.log(student);

student["greet"]();

let students = [
  { id: 1, name: "Peter", gpa: 4.0 },
  { id: 2, name: "Alice", gpa: 3.0 },
  { id: 3, name: "Steve", gpa: 2.0 },
  { id: 4, name: "Lucy", gpa: 4.0 },
  { id: 5, name: "Ned", gpa: 2.5 },
];

// BONUS
// For Loop
for (let i = 0; i < students.length; i++) {
  console.log(students[i]["name"]);
}

students.forEach((s) => {
  console.log(`name: ${s["name"]}, gpa: ${s["gpa"]}`);
});

(s) => {
  console.log(`name: ${s["name"]}, gpa: ${s["gpa"]}`);
};

console.log(students.filter((student) => student.gpa > 2.0));

console.log(students.find((student) => student.gpa == 2.0));

// Sorting
console.log(students);
console.log(students.sort((a, b) => a.gpa - b.gpa));

// ADDITIONAL FOR LOOP
for (let s of students) {
  console.log(s["name"]);
}
