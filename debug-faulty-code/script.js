console.log("=== DEBUG FAULTY CODE — script.js loaded ===");

const debugLog = (label, value) => {
  console.log(`[DEBUG] ${label}:`, value);
};

console.group("SNIPPET 1 — Syntax Error: Missing closing parenthesis");

function addNumbers(a, b) {
  return a + b;
}

const result1 = addNumbers(5, 10);
debugLog("addNumbers(5, 10)", result1);
console.assert(result1 === 15, "FAIL: addNumbers should return 15");
console.log("PASS: addNumbers returned", result1);
console.groupEnd();

console.group("SNIPPET 2 — Runtime Error: Accessing property of undefined");

function getUserName(user) {
  if (!user || typeof user !== "object") {
    console.warn("[WARN] getUserName received invalid input:", user);
    return "Unknown";
  }
  return user.name;
}

const result2a = getUserName({ name: "Alice" });
debugLog("getUserName with valid user", result2a);

const result2b = getUserName(null);
debugLog("getUserName with null", result2b);

console.assert(result2a === "Alice", "FAIL: Should return 'Alice'");
console.assert(result2b === "Unknown", "FAIL: Should return 'Unknown'");
console.log("PASS: getUserName handled both cases correctly");
console.groupEnd();

console.group("SNIPPET 3 — Logical Error: Wrong comparison operator (= vs ===)");

function isAdult(age) {
  return age >= 18;
}

const result3a = isAdult(20);
const result3b = isAdult(15);
debugLog("isAdult(20)", result3a);
debugLog("isAdult(15)", result3b);

console.assert(result3a === true, "FAIL: 20 should be adult");
console.assert(result3b === false, "FAIL: 15 should not be adult");
console.log("PASS: isAdult returned correct results");
console.groupEnd();

console.group("SNIPPET 4 — Runtime Error: Infinite loop (off-by-one)");

function sumUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

const result4 = sumUpTo(5);
debugLog("sumUpTo(5)", result4);
console.assert(result4 === 15, "FAIL: sumUpTo(5) should equal 15");
console.log("PASS: sumUpTo(5) returned", result4);
console.groupEnd();

console.group("SNIPPET 5 — Syntax Error: Undefined variable reference");

function greetUser(name) {
  const message = "Hello, " + name + "!";
  return message;
}

const result5 = greetUser("Maria");
debugLog("greetUser('Maria')", result5);
console.assert(result5 === "Hello, Maria!", "FAIL: Greeting mismatch");
console.log("PASS: greetUser returned:", result5);
console.groupEnd();

console.group("SNIPPET 6 — Logical Error: Wrong array method used");

function getFirstThree(arr) {
  if (!Array.isArray(arr)) {
    console.warn("[WARN] Expected an array, got:", typeof arr);
    return [];
  }
  return arr.slice(0, 3);
}

const result6 = getFirstThree([10, 20, 30, 40, 50]);
debugLog("getFirstThree([10,20,30,40,50])", result6);
console.assert(JSON.stringify(result6) === JSON.stringify([10, 20, 30]), "FAIL: Should return [10, 20, 30]");
console.log("PASS: getFirstThree returned", result6);
console.groupEnd();

console.group("SNIPPET 7 — Runtime Error: Division by zero");

function safeDivide(a, b) {
  if (b === 0) {
    console.error("[ERROR] Division by zero attempted");
    return null;
  }
  return a / b;
}

const result7a = safeDivide(10, 2);
const result7b = safeDivide(10, 0);
debugLog("safeDivide(10, 2)", result7a);
debugLog("safeDivide(10, 0)", result7b);
console.assert(result7a === 5, "FAIL: 10/2 should be 5");
console.assert(result7b === null, "FAIL: Division by zero should return null");
console.log("PASS: safeDivide handled both cases correctly");
console.groupEnd();

console.group("SNIPPET 8 — Logical Error: String concatenation instead of addition");

function calculateTotal(price, tax) {
  const priceNum = Number(price);
  const taxNum = Number(tax);
  return priceNum + taxNum;
}

const result8 = calculateTotal(100, 20);
debugLog("calculateTotal(100, 20)", result8);
console.assert(result8 === 120, "FAIL: Total should be 120");
console.log("PASS: calculateTotal returned", result8);
console.groupEnd();

console.log("=== ALL SNIPPETS EXECUTED — check assertions above for results ===");

window.snippetResults = {
  addNumbers: result1,
  getUserName: { valid: result2a, invalid: result2b },
  isAdult: { adult: result3a, minor: result3b },
  sumUpTo: result4,
  greetUser: result5,
  getFirstThree: result6,
  safeDivide: { normal: result7a, byZero: result7b },
  calculateTotal: result8,
};
