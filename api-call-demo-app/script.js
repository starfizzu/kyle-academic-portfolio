const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');
const loadingEl = document.getElementById('loading');
const errorBox = document.getElementById('error-box');

function showLoading() {
  loadingEl.classList.remove('hidden');
  errorBox.classList.add('hidden');
  dataContainer.innerHTML = '';
  fetchBtn.disabled = true;
}

function hideLoading() {
  loadingEl.classList.add('hidden');
  fetchBtn.disabled = false;
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.classList.remove('hidden');
}

function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('user-card');

  const name = document.createElement('div');
  name.classList.add('user-card-name');
  name.textContent = user.name;

  const username = document.createElement('div');
  username.classList.add('user-card-username');
  username.textContent = '@' + user.username;

  const divider = document.createElement('div');
  divider.classList.add('user-card-divider');

  const info = document.createElement('div');
  info.classList.add('user-card-info');

  const emailSpan = document.createElement('span');
  emailSpan.innerHTML = '<span class="info-label">Email</span>' + user.email;

  const phoneSpan = document.createElement('span');
  phoneSpan.innerHTML = '<span class="info-label">Phone</span>' + user.phone;

  const citySpan = document.createElement('span');
  citySpan.innerHTML = '<span class="info-label">City</span>' + user.address.city;

  const companySpan = document.createElement('span');
  companySpan.innerHTML = '<span class="info-label">Company</span>' + user.company.name;

  info.appendChild(emailSpan);
  info.appendChild(phoneSpan);
  info.appendChild(citySpan);
  info.appendChild(companySpan);

  card.appendChild(name);
  card.appendChild(username);
  card.appendChild(divider);
  card.appendChild(info);

  return card;
}

function displayUsers(users) {
  users.forEach(function(user) {
    const card = createUserCard(user);
    dataContainer.appendChild(card);
  });
}

fetchBtn.addEventListener('click', function() {
  showLoading();

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Network response was not OK. Status: ' + response.status);
      }
      return response.json();
    })
    .then(function(data) {
      hideLoading();
      displayUsers(data);
    })
    .catch(function(error) {
      hideLoading();
      showError('Failed to fetch data: ' + error.message);
    });
});
