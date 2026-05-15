const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const [first, second] = fruits;
console.log("First fruit:", first);
console.log("Second fruit:", second);

const [, , third] = fruits;
console.log("Third fruit (skipped first two):", third);

const [firstFruit, , thirdFruit, ...remaining] = fruits;
console.log("First:", firstFruit);
console.log("Third:", thirdFruit);
console.log("Remaining:", remaining);

const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log("a:", a, "b:", b, "c:", c);

const person = {
  name: "Maria Santos",
  age: 28,
  city: "Manila",
  occupation: "Engineer"
};

const { name, age } = person;
console.log("Name:", name);
console.log("Age:", age);

const { city, occupation } = person;
console.log("City:", city);
console.log("Occupation:", occupation);

const product = {
  id: 101,
  title: "Laptop",
  price: 999.99,
  brand: "TechBrand"
};

const { id, title, price, brand } = product;
console.log("Product ID:", id);
console.log("Title:", title);
console.log("Price:", price);
console.log("Brand:", brand);

const student = {
  fullName: "Juan dela Cruz",
  grades: {
    math: 92,
    science: 88,
    english: 95
  },
  address: {
    street: "123 Rizal Ave",
    city: "Quezon City"
  }
};

const { fullName, grades: { math, science, english }, address: { street, city: studentCity } } = student;
console.log("Student:", fullName);
console.log("Math:", math, "Science:", science, "English:", english);
console.log("Street:", street, "City:", studentCity);

const config = {
  host: "localhost",
  port: 3000
};

const { host, port, protocol = "http", timeout = 5000 } = config;
console.log("Host:", host);
console.log("Port:", port);
console.log("Protocol (default):", protocol);
console.log("Timeout (default):", timeout);

const employee = {
  firstName: "Ana",
  lastName: "Reyes",
  empId: 42
};

const { firstName: empFirstName, lastName: empLastName, empId: employeeId } = employee;
console.log("First Name:", empFirstName);
console.log("Last Name:", empLastName);
console.log("Employee ID:", employeeId);

function displayUser({ name, age, city = "Unknown" }) {
  console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
}

displayUser({ name: "Carlo", age: 30, city: "Cebu" });
displayUser({ name: "Lena", age: 25 });

function getTopScores([first, second, third]) {
  console.log(`1st: ${first}, 2nd: ${second}, 3rd: ${third}`);
}

getTopScores([98, 95, 90]);

function processOrder({ orderId, item, quantity = 1, discount = 0 }) {
  const total = (quantity * 100) - discount;
  console.log(`Order #${orderId}: ${item} x${quantity}, Discount: ${discount}, Total: ${total}`);
}

processOrder({ orderId: "A001", item: "Notebook", quantity: 3, discount: 50 });
processOrder({ orderId: "A002", item: "Pen" });
