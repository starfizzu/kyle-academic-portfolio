/**
 * Automated Tests — replaces manual Postman testing (Subtasks 5.1 & 6.1)
 * Run: node test.js
 */

const http = require("http");

let passed = 0;
let failed = 0;

async function post(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request(
      {
        hostname: "localhost",
        port: 3000,
        path: "/register",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(data),
        },
      },
      (res) => {
        let raw = "";
        res.on("data", (chunk) => (raw += chunk));
        res.on("end", () =>
          resolve({ status: res.statusCode, body: JSON.parse(raw) })
        );
      }
    );
    req.on("error", reject);
    req.write(data);
    req.end();
  });
}

function assert(label, condition, detail = "") {
  if (condition) {
    console.log(`  ✅  PASS — ${label}`);
    passed++;
  } else {
    console.log(`  ❌  FAIL — ${label}${detail ? " → " + detail : ""}`);
    failed++;
  }
}

async function runTests() {
  console.log("\n══════════════════════════════════════════════");
  console.log("   INPUT VALIDATION DEMO — Automated Tests");
  console.log("══════════════════════════════════════════════\n");

  // ── 1. Missing all fields ────────────────────────────────────────────────
  console.log("📋 Test 1: Missing all fields");
  let r = await post({});
  assert("Status is 400", r.status === 400, `got ${r.status}`);
  assert("success is false", r.body.success === false);
  assert("Has errors array", Array.isArray(r.body.errors));
  assert(
    "message is 'Invalid input data'",
    r.body.message === "Invalid input data"
  );
  console.log();

  // ── 2. Name with numbers/symbols ────────────────────────────────────────
  console.log("📋 Test 2: Invalid name (numbers in name)");
  r = await post({ name: "John99", email: "j@ex.com", password: "Pass@1234" });
  assert("Status is 400", r.status === 400);
  assert(
    "Name error reported",
    r.body.errors.some((e) => e.field === "name")
  );
  console.log();

  // ── 3. Invalid email format ──────────────────────────────────────────────
  console.log("📋 Test 3: Invalid email format");
  r = await post({ name: "Jane", email: "not-an-email", password: "Pass@1234" });
  assert("Status is 400", r.status === 400);
  assert(
    "Email error reported",
    r.body.errors.some((e) => e.field === "email")
  );
  console.log();

  // ── 4. Missing @ in email ────────────────────────────────────────────────
  console.log("📋 Test 4: Email missing @ symbol");
  r = await post({
    name: "Jane",
    email: "janeexample.com",
    password: "Pass@1234",
  });
  assert("Status is 400", r.status === 400);
  assert(
    "Email error reported",
    r.body.errors.some((e) => e.field === "email")
  );
  console.log();

  // ── 5. Password too short ────────────────────────────────────────────────
  console.log("📋 Test 5: Password too short (< 8 chars)");
  r = await post({ name: "Jane", email: "j@ex.com", password: "Ab1!" });
  assert("Status is 400", r.status === 400);
  assert(
    "Password error reported",
    r.body.errors.some((e) => e.field === "password")
  );
  console.log();

  // ── 6. Password missing special char ────────────────────────────────────
  console.log("📋 Test 6: Password missing special character");
  r = await post({ name: "Jane", email: "j@ex.com", password: "Password1" });
  assert("Status is 400", r.status === 400);
  assert(
    "Password error reported",
    r.body.errors.some((e) => e.field === "password")
  );
  console.log();

  // ── 7. Password missing uppercase ───────────────────────────────────────
  console.log("📋 Test 7: Password missing uppercase letter");
  r = await post({ name: "Jane", email: "j@ex.com", password: "password1!" });
  assert("Status is 400", r.status === 400);
  assert(
    "Password error reported",
    r.body.errors.some((e) => e.field === "password")
  );
  console.log();

  // ── 8. Multiple simultaneous errors ─────────────────────────────────────
  console.log("📋 Test 8: Multiple errors at once (bad email + bad password)");
  r = await post({ name: "Alice", email: "bad-email", password: "short" });
  assert("Status is 400", r.status === 400);
  assert("Multiple errors returned", r.body.errors.length >= 2);
  console.log();

  // ── 9. Valid input ───────────────────────────────────────────────────────
  console.log("📋 Test 9: Fully valid input");
  r = await post({
    name: "Alice Smith",
    email: "alice@example.com",
    password: "Secure@123",
  });
  assert("Status is 201", r.status === 201, `got ${r.status}`);
  assert("success is true", r.body.success === true);
  assert("Returns user object", r.body.user && r.body.user.email);
  console.log();

  // ── 10. Extra whitespace in name (should still pass) ────────────────────
  console.log("📋 Test 10: Name with leading/trailing spaces (valid)");
  r = await post({
    name: "  Bob  ",
    email: "bob@test.org",
    password: "Hello@999",
  });
  assert("Status is 201", r.status === 201);
  console.log();

  // ── Summary ──────────────────────────────────────────────────────────────
  console.log("══════════════════════════════════════════════");
  console.log(`   Results: ${passed} passed / ${failed} failed`);
  console.log("══════════════════════════════════════════════\n");
  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch((err) => {
  console.error("Could not connect to server. Is it running?", err.message);
  process.exit(1);
});
