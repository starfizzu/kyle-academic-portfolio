let fruits = ["Apple", "Banana", "Mango"];
let numbers = [10, 20, 30, 40, 50];
let mixed = ["Hello", 42, true, null];

console.log("=== INITIAL ARRAYS ===");
console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed:", mixed);

console.log("\n=== ARRAY METHODS ===");

fruits.push("Grapes");
console.log("After push('Grapes'):", fruits);

fruits.pop();
console.log("After pop():", fruits);

fruits.unshift("Strawberry");
console.log("After unshift('Strawberry'):", fruits);

fruits.shift();
console.log("After shift():", fruits);

console.log("Length of fruits:", fruits.length);
console.log("Length of numbers:", numbers.length);

const student = {
  name: "Maria Santos",
  age: 20,
  course: "Computer Science",
  gpa: 3.8,
  isActive: true
};

const product = {
  title: "Wireless Mouse",
  price: 599,
  brand: "Logitech",
  stock: 100
};

console.log("\n=== INITIAL OBJECTS ===");
console.log("Student:", student);
console.log("Product:", product);

console.log("\n=== ACCESSING OBJECT PROPERTIES ===");
console.log("Student name (dot):", student.name);
console.log("Student course (bracket):", student["course"]);
console.log("Product price (dot):", product.price);
console.log("Product brand (bracket):", product["brand"]);

console.log("\n=== MODIFYING OBJECT PROPERTIES ===");
student.age = 21;
student["gpa"] = 3.9;
console.log("Updated age:", student.age);
console.log("Updated GPA:", student.gpa);

product.price = 549;
product.stock = 85;
console.log("Updated price:", product.price);
console.log("Updated stock:", product.stock);

student.scholarship = "Academic Excellence";
product["discount"] = "10%";
console.log("Student with scholarship:", student);
console.log("Product with discount:", product);

console.log("\n=== ARRAY PROCESSING METHODS ===");

const doubled = numbers.map(n => n * 2);
console.log("Original numbers:", numbers);
console.log("Doubled (map):", doubled);

const evenNumbers = numbers.filter(n => n % 2 === 0);
console.log("Even numbers (filter):", evenNumbers);

const bigNumbers = numbers.filter(n => n > 20);
console.log("Numbers greater than 20 (filter):", bigNumbers);

console.log("forEach output:");
fruits.forEach((fruit, index) => {
  console.log(`  [${index}] ${fruit}`);
});

const total = numbers.reduce((sum, n) => sum + n, 0);
console.log("Sum of numbers (reduce):", total);

const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Uppercase fruits (map):", upperFruits);

console.log("\n=== OBJECTS INSIDE ARRAYS ===");

const students = [
  { name: "Maria Santos", course: "Computer Science", gpa: 3.9 },
  { name: "Juan dela Cruz", course: "Information Technology", gpa: 3.5 },
  { name: "Ana Reyes", course: "Computer Engineering", gpa: 3.7 },
  { name: "Carlo Mendoza", course: "Information Systems", gpa: 2.8 },
  { name: "Liza Flores", course: "Computer Science", gpa: 3.6 }
];

console.log("All students:");
students.forEach(s => console.log(`  ${s.name} | ${s.course} | GPA: ${s.gpa}`));

const honorStudents = students.filter(s => s.gpa >= 3.6);
console.log("\nHonor students (GPA >= 3.6):");
honorStudents.forEach(s => console.log(`  ${s.name} - ${s.gpa}`));

const studentNames = students.map(s => s.name);
console.log("\nStudent names only (map):", studentNames);

const csStudents = students.filter(s => s.course === "Computer Science");
console.log("\nCS students only (filter):");
csStudents.forEach(s => console.log(`  ${s.name}`));

const totalGpa = students.reduce((sum, s) => sum + s.gpa, 0);
const averageGpa = (totalGpa / students.length).toFixed(2);
console.log("\nAverage GPA (reduce):", averageGpa);

students.push({ name: "Ben Torres", course: "Information Technology", gpa: 3.3 });
console.log("\nAfter adding Ben Torres, total students:", students.length);

students[0].gpa = 4.0;
console.log("After updating Maria's GPA:", students[0]);
