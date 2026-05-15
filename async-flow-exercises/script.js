function runStep1() {
  const output = [];
  const original = console.log;
  console.log = (...args) => { output.push(args.join(" ")); original(...args); };

  console.log("A");
  console.log("B");
  console.log("C");

  console.log = original;
  document.getElementById("step1-output").textContent = output.join(" → ");
}

function runStep2() {
  const output = [];
  const original = console.log;
  console.log = (...args) => { output.push(args.join(" ")); original(...args); };

  console.log("Start");
  setTimeout(() => {
    console.log("Timeout");
    console.log = original;
    document.getElementById("step2-output").textContent = output.join(" → ");
  }, 0);
  console.log("End");

  console.log = original;
}

function runStep3() {
  const output = [];
  const original = console.log;
  console.log = (...args) => { output.push(args.join(" ")); original(...args); };

  console.log("Start");
  Promise.resolve().then(() => {
    console.log("Promise");
    console.log = original;
    document.getElementById("step3-output").textContent = output.join(" → ");
  });
  console.log("End");

  console.log = original;
}

function runStep4() {
  const output = [];
  const original = console.log;
  console.log = (...args) => { output.push(args.join(" ")); original(...args); };

  console.log("Start");
  setTimeout(() => {
    console.log("Timeout");
    console.log = original;
    document.getElementById("step4-output").textContent = output.join(" → ");
  }, 0);
  Promise.resolve().then(() => {
    console.log("Promise");
  });
  console.log("End");

  console.log = original;
}

async function runStep5() {
  const output = [];
  const original = console.log;
  console.log = (...args) => { output.push(args.join(" ")); original(...args); };

  async function test() {
    console.log("1");
    await Promise.resolve();
    console.log("2");
    console.log = original;
    document.getElementById("step5-output").textContent = output.join(" → ");
  }

  console.log("3");
  test();
  console.log("4");

  console.log = original;
}

function runStep6() {
  const output = [];
  const original = console.log;
  console.log = (...args) => { output.push(args.join(" ")); original(...args); };

  console.log("A");
  setTimeout(() => {
    console.log("B");
    console.log = original;
    document.getElementById("step6-output").textContent = output.join(" → ");
  }, 0);
  Promise.resolve().then(() => {
    console.log("C");
  });
  console.log("D");

  console.log = original;
}

window.onload = () => {
  runStep1();
  runStep2();
  runStep3();
  runStep4();
  runStep5();
  runStep6();
};
