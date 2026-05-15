"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// Utility helpers
// ─────────────────────────────────────────────────────────────────────────────

function showOutput(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = "▶ Output: " + text;
}

function logSection(title) {
  console.log(
    `%c\n${"─".repeat(52)}\n  ${title}\n${"─".repeat(52)}`,
    "color:#6366f1; font-weight:bold;"
  );
}

function logFixed(label, value) {
  console.log(`%c✅ ${label}`, "color:#16a34a; font-weight:bold;", value);
}

function logBug(label, value) {
  console.log(`%c❌ Bug: ${label}`, "color:#dc2626; font-weight:bold;", value);
}


// =============================================================================
// BUG #1 — Syntax Error: Missing Closing Parenthesis
// =============================================================================
logSection("Bug #1 — Syntax Error: Missing Closing Parenthesis");

/*
  FAULTY CODE (would crash entire script — shown as comment only):

    function greet(name {        ← missing ) after name
      return "Hello, " + name;
    }

  WHY IT FAILS:
    JavaScript sees `name {` and cannot match it to any valid syntax.
    It throws: SyntaxError: Unexpected token '{'
    The entire script halts — nothing below this line would run.
*/

// ── Fixed version ──
function greet(name) {
  return "Hello, " + name;
}

const greeting = greet("Maria");
logFixed("greet('Maria')", greeting);
showOutput("output1", greeting);


// =============================================================================
// BUG #2 — Syntax Error: Unclosed String Literal
// =============================================================================
logSection("Bug #2 — Syntax Error: Unclosed String Literal");

/*
  FAULTY CODE (shown as comment — cannot place broken strings in live code):

    let message = "Welcome to the lab;     ← closing " is missing
    console.log(message);

  WHY IT FAILS:
    The parser keeps reading past the semicolon looking for the closing quote.
    It throws: SyntaxError: Invalid or unexpected token
    Nothing in the script runs.
*/

// ── Fixed version ──
let message = "Welcome to the lab";
logFixed("message", message);
showOutput("output2", message);


// =============================================================================
// BUG #3 — Runtime Error: Calling undefined as a Function
// =============================================================================
logSection("Bug #3 — Runtime Error: Typo in Method Name");

// ── Demonstrate the bug (caught safely) ──
try {
  const numbers = [1, 2, 3, 4, 5];
  const broken = numbers.reduces((acc, n) => acc + n, 0); // typo: reduces
  console.log(broken);
} catch (err) {
  logBug("numbers.reduces is not a function", err.message);
}

// ── Fixed version ──
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, n) => acc + n, 0); // correct: reduce
logFixed("numbers.reduce(sum)", total);
showOutput("output3", "Sum of [1,2,3,4,5] = " + total);


// =============================================================================
// BUG #4 — Runtime Error: Accessing Property of null
// =============================================================================
logSection("Bug #4 — Runtime Error: Property Access on null");

// ── Demonstrate the bug (caught safely) ──
function getUsernameBroken(user) {
  return user.name.toUpperCase(); // crashes if user is null
}

try {
  getUsernameBroken(null);
} catch (err) {
  logBug("getUsernameBroken(null)", err.message);
}

// ── Fixed version: guard clause before property access ──
function getUsername(user) {
  if (!user || !user.name) {
    return "Guest";
  }
  return user.name.toUpperCase();
}

const result1 = getUsername(null);
const result2 = getUsername({ name: "carlos" });
logFixed("getUsername(null)", result1);
logFixed("getUsername({name:'carlos'})", result2);
showOutput("output4", `null → "${result1}" | {name:'carlos'} → "${result2}"`);


// =============================================================================
// BUG #5 — Logical Error: Assignment Instead of Comparison
// =============================================================================
logSection("Bug #5 — Logical Error: = instead of >=");

// ── Demonstrate the bug ──
function isAdultBroken(age) {
  if (age = 18) { // assignment! always truthy after assigning 18
    return true;
  }
  return false;
}
logBug("isAdultBroken(15) returns", isAdultBroken(15)); // wrongly returns true

// ── Fixed version ──
function isAdult(age) {
  if (age >= 18) { // comparison: is age greater than or equal to 18?
    return true;
  }
  return false;
}

logFixed("isAdult(15)", isAdult(15));  // false
logFixed("isAdult(20)", isAdult(20));  // true
showOutput("output5", `isAdult(15) = ${isAdult(15)} | isAdult(20) = ${isAdult(20)}`);


// =============================================================================
// BUG #6 — Logical Error: Off-by-One in Loop (< instead of <=)
// =============================================================================
logSection("Bug #6 — Logical Error: Off-by-One in Loop");

// ── Demonstrate the bug ──
function sumUpToBroken(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) { // stops at n-1, skips n
    sum += i;
  }
  return sum;
}
logBug("sumUpToBroken(5) returns", sumUpToBroken(5)); // returns 10, not 15

// ── Fixed version ──
function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) { // includes n
    sum += i;
  }
  return sum;
}

logFixed("sumUpTo(5)", sumUpTo(5));   // 15
logFixed("sumUpTo(10)", sumUpTo(10)); // 55
showOutput("output6", `sumUpTo(5) = ${sumUpTo(5)} | sumUpTo(10) = ${sumUpTo(10)}`);


// =============================================================================
// Summary
// =============================================================================
console.log(
  "%c\n✅ All 6 bugs identified and fixed successfully!\n",
  "color:#16a34a; font-weight:bold; font-size:14px;"
);

console.table([
  { Bug: "#1", Type: "Syntax",  Description: "Missing ) in function params",        Status: "Fixed ✅" },
  { Bug: "#2", Type: "Syntax",  Description: "Unclosed string literal",             Status: "Fixed ✅" },
  { Bug: "#3", Type: "Runtime", Description: "Typo: .reduces() → .reduce()",        Status: "Fixed ✅" },
  { Bug: "#4", Type: "Runtime", Description: "Property access on null",             Status: "Fixed ✅" },
  { Bug: "#5", Type: "Logical", Description: "Assignment (=) instead of (>=)",      Status: "Fixed ✅" },
  { Bug: "#6", Type: "Logical", Description: "Off-by-one: i < n should be i <= n",  Status: "Fixed ✅" },
]);
