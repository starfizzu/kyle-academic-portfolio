<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Debug Faulty Code Lab</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <header>
    <h1>🐛 Debug Faulty Code Lab</h1>
    <p>Six real bugs — identified, explained, and fixed. Open <kbd>F12</kbd> to follow along in the console.</p>
  </header>

  <main>

    <!-- Bug 1 -->
    <article class="bug-card" id="bug1">
      <div class="bug-header">
        <span class="badge syntax">Syntax Error</span>
        <h2>Bug #1 — Missing Closing Parenthesis</h2>
      </div>
      <div class="code-cols">
        <div class="code-block bad">
          <p class="label">❌ Faulty</p>
          <pre><code>function greet(name {
  return "Hello, " + name;
}
console.log(greet("Maria"));</code></pre>
        </div>
        <div class="code-block good">
          <p class="label">✅ Fixed</p>
          <pre><code>function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Maria"));</code></pre>
        </div>
      </div>
      <p class="explanation"><strong>Problem:</strong> The closing parenthesis <code>)</code> was missing in the function parameter list, causing a <em>SyntaxError: Unexpected token '{'</em>. JavaScript cannot parse the function declaration at all.</p>
      <div class="output-box" id="output1"></div>
    </article>

    <!-- Bug 2 -->
    <article class="bug-card" id="bug2">
      <div class="bug-header">
        <span class="badge syntax">Syntax Error</span>
        <h2>Bug #2 — Unclosed String Literal</h2>
      </div>
      <div class="code-cols">
        <div class="code-block bad">
          <p class="label">❌ Faulty</p>
          <pre><code>let message = "Welcome to the lab;
console.log(message);</code></pre>
        </div>
        <div class="code-block good">
          <p class="label">✅ Fixed</p>
          <pre><code>let message = "Welcome to the lab";
console.log(message);</code></pre>
        </div>
      </div>
      <p class="explanation"><strong>Problem:</strong> The string literal was never closed — the closing <code>"</code> was missing. This causes a <em>SyntaxError: Invalid or unexpected token</em> and prevents the entire script from running.</p>
      <div class="output-box" id="output2"></div>
    </article>

    <!-- Bug 3 -->
    <article class="bug-card" id="bug3">
      <div class="bug-header">
        <span class="badge runtime">Runtime Error</span>
        <h2>Bug #3 — Calling undefined as a Function</h2>
      </div>
      <div class="code-cols">
        <div class="code-block bad">
          <p class="label">❌ Faulty</p>
          <pre><code>let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduces(
  (acc, n) => acc + n, 0
);
console.log(total);</code></pre>
        </div>
        <div class="code-block good">
          <p class="label">✅ Fixed</p>
          <pre><code>let numbers = [1, 2, 3, 4, 5];
let total = numbers.reduce(
  (acc, n) => acc + n, 0
);
console.log(total);</code></pre>
        </div>
      </div>
      <p class="explanation"><strong>Problem:</strong> <code>reduces</code> is not a method on Array — it's a typo of <code>reduce</code>. At runtime JavaScript throws <em>TypeError: numbers.reduces is not a function</em> because the property resolves to <code>undefined</code>.</p>
      <div class="output-box" id="output3"></div>
    </article>

    <!-- Bug 4 -->
    <article class="bug-card" id="bug4">
      <div class="bug-header">
        <span class="badge runtime">Runtime Error</span>
        <h2>Bug #4 — Accessing Property of null</h2>
      </div>
      <div class="code-cols">
        <div class="code-block bad">
          <p class="label">❌ Faulty</p>
          <pre><code>function getUsername(user) {
  return user.name.toUpperCase();
}
console.log(getUsername(null));</code></pre>
        </div>
        <div class="code-block good">
          <p class="label">✅ Fixed</p>
          <pre><code>function getUsername(user) {
  if (!user || !user.name) {
    return "Guest";
  }
  return user.name.toUpperCase();
}
console.log(getUsername(null));</code></pre>
        </div>
      </div>
      <p class="explanation"><strong>Problem:</strong> Calling <code>user.name</code> when <code>user</code> is <code>null</code> causes a <em>TypeError: Cannot read properties of null</em>. A guard clause checks for null/undefined before property access.</p>
      <div class="output-box" id="output4"></div>
    </article>

    <!-- Bug 5 -->
    <article class="bug-card" id="bug5">
      <div class="bug-header">
        <span class="badge logical">Logical Error</span>
        <h2>Bug #5 — Wrong Comparison Operator</h2>
      </div>
      <div class="code-cols">
        <div class="code-block bad">
          <p class="label">❌ Faulty</p>
          <pre><code>function isAdult(age) {
  if (age = 18) {
    return true;
  }
  return false;
}
console.log(isAdult(15));</code></pre>
        </div>
        <div class="code-block good">
          <p class="label">✅ Fixed</p>
          <pre><code>function isAdult(age) {
  if (age >= 18) {
    return true;
  }
  return false;
}
console.log(isAdult(15));</code></pre>
        </div>
      </div>
      <p class="explanation"><strong>Problem:</strong> <code>age = 18</code> is an <em>assignment</em>, not a comparison. It assigns 18 to <code>age</code> and the condition always evaluates to truthy — so even <code>isAdult(15)</code> returns <code>true</code>. Fix: use <code>&gt;=</code>.</p>
      <div class="output-box" id="output5"></div>
    </article>

    <!-- Bug 6 -->
    <article class="bug-card" id="bug6">
      <div class="bug-header">
        <span class="badge logical">Logical Error</span>
        <h2>Bug #6 — Off-by-One in Loop</h2>
      </div>
      <div class="code-cols">
        <div class="code-block bad">
          <p class="label">❌ Faulty</p>
          <pre><code>function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumUpTo(5)); // expected 15</code></pre>
        </div>
        <div class="code-block good">
          <p class="label">✅ Fixed</p>
          <pre><code>function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumUpTo(5)); // correctly: 15</code></pre>
        </div>
      </div>
      <p class="explanation"><strong>Problem:</strong> The loop condition <code>i &lt; n</code> stops at 4, skipping <code>n</code> itself — so it returns 10 instead of 15. Changing to <code>i &lt;= n</code> includes the final value.</p>
      <div class="output-box" id="output6"></div>
    </article>

  </main>

  <footer>
    <p>All fixes verified in <code>script.js</code> — check the console for full trace output.</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>
