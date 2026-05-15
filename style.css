"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// Utility: pretty-print a labelled result to the console
// ─────────────────────────────────────────────────────────────────────────────
function log(label, ...values) {
  console.log(`%c${label}`, "color:#2563eb;font-weight:bold;", ...values);
}

function section(title) {
  console.log(
    `%c\n${"─".repeat(50)}\n  ${title}\n${"─".repeat(50)}`,
    "color:#1e3a8a;font-weight:bold;"
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// STEP 2 — Array Destructuring
// ═════════════════════════════════════════════════════════════════════════════
section("STEP 2 — Array Destructuring");

// 2a. Basic extraction
const colors = ["red", "green", "blue", "yellow", "purple"];
const [first, second, third] = colors;
log("2a. Basic extraction →", { first, second, third });

// 2b. Skipping elements (skip green, grab blue)
const [primary, , accent] = colors;
log("2b. Skip elements →", { primary, accent });

// 2c. Rest operator — collect remaining items
const [head, ...rest] = colors;
log("2c. Rest operator →", { head, rest });

// 2d. Swapping two variables without a temp
let x = 10, y = 20;
[x, y] = [y, x];
log("2d. Swap variables →", { x, y });

// 2e. Destructuring from a function return value
function getCoordinates() {
  return [40.7128, -74.0060]; // New York lat/lng
}
const [latitude, longitude] = getCoordinates();
log("2e. From function return →", { latitude, longitude });


// ═════════════════════════════════════════════════════════════════════════════
// STEP 3 — Object Destructuring
// ═════════════════════════════════════════════════════════════════════════════
section("STEP 3 — Object Destructuring");

const student = {
  name: "Maria Santos",
  age: 21,
  course: "Computer Science",
  grade: "A",
};

// 3a. Basic property extraction
const { name, age, course } = student;
log("3a. Basic extraction →", { name, age, course });

// 3b. Renaming variables on extraction
const { name: studentName, course: program } = student;
log("3b. Renamed variables →", { studentName, program });

// 3c. Default values (property may not exist)
const { grade, scholarship = "None", gpa = 3.8 } = student;
log("3c. Default values →", { grade, scholarship, gpa });

// 3d. Rest in objects — grab known props, collect the rest
const { name: n, ...otherDetails } = student;
log("3d. Object rest →", { n, otherDetails });


// ═════════════════════════════════════════════════════════════════════════════
// STEP 4 — Advanced Destructuring
// ═════════════════════════════════════════════════════════════════════════════
section("STEP 4 — Advanced / Nested Destructuring");

// 4a. Nested object destructuring
const company = {
  companyName: "TechCorp",
  location: {
    city: "Manila",
    country: "Philippines",
    zip: "1000",
  },
  ceo: {
    firstName: "Carlos",
    lastName: "Reyes",
  },
};

const {
  companyName,
  location: { city, country },
  ceo: { firstName: ceoFirst, lastName: ceoLast },
} = company;
log("4a. Nested object →", { companyName, city, country, ceoFirst, ceoLast });

// 4b. Nested array destructuring
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const [[a, b], [, mid], [, , last]] = matrix;
log("4b. Nested array →", { a, b, mid, last });

// 4c. Mixed: array of objects
const employees = [
  { id: 1, name: "Ana",  role: "Developer" },
  { id: 2, name: "Ben",  role: "Designer"  },
  { id: 3, name: "Cara", role: "Manager"   },
];
const [{ name: emp1 }, { name: emp2, role: emp2Role }] = employees;
log("4c. Array of objects →", { emp1, emp2, emp2Role });

// 4d. Default value + rename combined
const config = { host: "localhost", port: 3000 };
const { host, port, timeout: maxWait = 5000, retries: attempts = 3 } = config;
log("4d. Default + rename →", { host, port, maxWait, attempts });


// ═════════════════════════════════════════════════════════════════════════════
// STEP 5 — Destructuring in Function Parameters
// ═════════════════════════════════════════════════════════════════════════════
section("STEP 5 — Function Parameter Destructuring");

// 5a. Object parameter destructuring
function greetStudent({ name, course, grade = "N/A" }) {
  return `Hello, ${name}! You are enrolled in ${course} with grade ${grade}.`;
}
log("5a. Object param →", greetStudent(student));

// 5b. Array parameter destructuring
function summarizeScores([highest, second, , lowest]) {
  return `Top: ${highest} | Runner-up: ${second} | Lowest recorded: ${lowest}`;
}
const scores = [98, 87, 76, 65, 55];
log("5b. Array param →", summarizeScores(scores));

// 5c. Nested object param with defaults
function renderCard({ title, meta: { author = "Unknown", date = "N/A" } = {} }) {
  return `"${title}" by ${author} on ${date}`;
}
log("5c. Nested param + defaults →",
  renderCard({ title: "Intro to Destructuring", meta: { author: "Juan dela Cruz" } })
);
log("5c. Missing meta entirely →",
  renderCard({ title: "ES6 Cheatsheet" })
);

// 5d. Combined array + object in one call
function describeEmployee({ id, name, role }, [primary, secondary] = ["N/A", "N/A"]) {
  return `#${id} ${name} (${role}) — Skills: ${primary}, ${secondary}`;
}
log("5d. Combined params →",
  describeEmployee(employees[0], ["React", "Node.js"])
);

console.log("\n%c✅ All destructuring examples complete!", "color:green;font-weight:bold;font-size:14px;");
