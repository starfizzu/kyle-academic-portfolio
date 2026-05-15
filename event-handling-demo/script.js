const clickBtn = document.getElementById('clickBtn');
const clickOutput = document.getElementById('clickOutput');

const textInput = document.getElementById('textInput');
const inputOutput = document.getElementById('inputOutput');

const colorSelect = document.getElementById('colorSelect');
const changeOutput = document.getElementById('changeOutput');

const keyInput = document.getElementById('keyInput');
const keyOutput = document.getElementById('keyOutput');

const demoForm = document.getElementById('demoForm');
const nameInput = document.getElementById('nameInput');
const formOutput = document.getElementById('formOutput');

const hoverBox = document.getElementById('hoverBox');
const hoverOutput = document.getElementById('hoverOutput');

const focusInput = document.getElementById('focusInput');
const focusOutput = document.getElementById('focusOutput');

let clickCount = 0;

clickBtn.addEventListener('click', function () {
  clickCount++;
  clickOutput.textContent = 'Button clicked ' + clickCount + ' time(s).';
});

textInput.addEventListener('input', function () {
  if (textInput.value.trim() === '') {
    inputOutput.textContent = 'Start typing...';
  } else {
    inputOutput.textContent = 'You typed: ' + textInput.value;
  }
});

colorSelect.addEventListener('change', function () {
  const selected = colorSelect.value;
  if (selected) {
    changeOutput.textContent = 'Selected color: ' + colorSelect.options[colorSelect.selectedIndex].text;
    changeOutput.style.borderLeftColor = selected;
    changeOutput.style.color = selected;
  } else {
    changeOutput.textContent = 'No color selected.';
    changeOutput.style.borderLeftColor = '#4f46e5';
    changeOutput.style.color = '#4a5568';
  }
});

keyInput.addEventListener('keyup', function (e) {
  keyOutput.textContent = 'Last key pressed: ' + e.key;
});

demoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name !== '') {
    formOutput.textContent = 'Form submitted! Hello, ' + name + '!';
    nameInput.value = '';
  } else {
    formOutput.textContent = 'Please enter your name before submitting.';
  }
});

hoverBox.addEventListener('mouseover', function () {
  hoverBox.classList.add('hovered');
  hoverBox.textContent = 'Mouse is inside!';
  hoverOutput.textContent = 'Mouse entered the box.';
});

hoverBox.addEventListener('mouseout', function () {
  hoverBox.classList.remove('hovered');
  hoverBox.textContent = 'Hover over me';
  hoverOutput.textContent = 'Mouse left the box.';
});

focusInput.addEventListener('focus', function () {
  focusInput.classList.add('focused');
  focusOutput.textContent = 'Input is focused.';
});

focusInput.addEventListener('blur', function () {
  focusInput.classList.remove('focused');
  focusOutput.textContent = 'Input lost focus.';
});
