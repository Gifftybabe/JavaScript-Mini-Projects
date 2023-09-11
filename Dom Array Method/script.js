const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

getRandomUser();


// fetch random user and add money
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// double everyone money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });

  updateDOM();
}

// sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// filter only millionaires
// function showMillionaires() {
//   data = data.filter((user) => user.money > 1000000);
//   updateDOM();
// }

function showMillionaires() {
  const millionaires = data.filter((user) => user.money > 1000000);
  updateDOM(millionaires);

  // Check if there are no millionaires
  if (millionaires.length === 0) {
      // Display the "No millionaires found" message
      const noMillionairesMessage = document.getElementById('no-millionaires-message');
      noMillionairesMessage.style.display = 'block';
  } else {
      // Hide the message if there are millionaires
      const noMillionairesMessage = document.getElementById('no-millionaires-message');
      noMillionairesMessage.style.display = 'none';
  }
}


//calculate wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);

  const wealthEl = document.createElement('div');
  wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
  main.appendChild(wealthEl);
}

function addData(obj) {
  data.push(obj);
  updateDOM();
}

//update DOM
// function updateDOM(providedData = data) {
//   // clear main div
//   main.innerHTML = '<h2><strong>Person</strong></h2>';

//   providedData.forEach((item) => {
//     const element = document.createElement('div');
//     element.classList.add('person');
//     element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
//     main.appendChild(element);
//   });
// }

function updateDOM(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong></h2>';


  if (providedData.length === 0) {
      // Display the "No millionaires found" message
      const noMillionairesMessage = document.getElementById('no-millionaires-message');
      noMillionairesMessage.style.display = 'block';
  } else {
      // Hide the message if there are data
      const noMillionairesMessage = document.getElementById('no-millionaires-message');
      noMillionairesMessage.style.display = 'none';

      providedData.forEach((item) => {
          const element = document.createElement('div');
          element.classList.add('person');
          element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
          main.appendChild(element);
      });
  }
}


//Format number as money
function formatMoney(number) {
  return '₦ ' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairesBtn.addEventListener('click', showMillionaires);
calculateWealthBtn.addEventListener('click', calculateWealth);
