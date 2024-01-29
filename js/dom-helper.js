// after the page is loaded
window.onload = function () {
  checkLocation();
  checkCookies();
};

// function to get the user location
function checkLocation() {
  fetch('https://ipapi.co/json/')
    .then((response) => response.json())
    .then((data) => {
      // Extract the country from the response
      const currency = data.currency;

      // Check country
      if (currency === 'USD') {
        // USD customers
        adjustPricesForUSD();
      } else {
        // EUR customers
        adjustPricesForEUR();
      }
    })
    .catch((error) => {
      console.error('Error fetching currency:', error);
    });
}

// EUR - prices
const pricesEUR = [25, 25, 150, 300, 1000];
const currencyEUR = '€';

// USD - prices
const pricesUSD = [50, 50, 250, 500, 2000];
const currencyUSD = '$';

// adjust prices for USD customers
function adjustPricesForUSD() {
  // get all prices
  const prices = document.getElementsByClassName('prices');
  const currencies = document.getElementsByClassName('currency');
}

// adjust prices for EUR customers
function adjustPricesForEUR() {
  // get all prices
  const prices = document.getElementsByClassName('prices');
  const currencies = document.getElementsByClassName('currency');

  // loop through prices
  for (let i = 0; i < prices.length; i++) {
    // change the currency to EUR
    currencies[i].innerHTML = currencyEUR;

    // change the price value
    const price = prices[i];
    price.innerHTML = pricesEUR[i];
  }
}

// adjust prices for USD customers
function adjustPricesForUSD() {
  // get all prices
  const prices = document.getElementsByClassName('prices');
  const currencies = document.getElementsByClassName('currency');

  // loop through prices
  for (let i = 0; i < prices.length; i++) {
    // change the currency to USD
    currencies[i].innerHTML = currencyUSD;

    // change the price value
    const price = prices[i];
    price.innerHTML = pricesUSD[i];
  }
}

// expand faq boxes
function toggleDescription(box) {
  box.classList.toggle('expanded');
}

// scroll to section
function scrollToSection(sectionName) {
  var section = document.getElementById(sectionName);
  var sectionOffset = section.offsetTop;
  var offset = 0;

  window.scrollTo({
    top: sectionOffset - offset,
    behavior: 'smooth',
  });
}

// click on "get started" button to write a description in textarea
const textDescriptions = [
  'I need a website to promote my work',
  'I need a way to sell my products online',
  'I need to manage my business internally',
  'I need an bespoke online store for my business',
];

function writeDescription(num) {
  document.getElementById('textarea').value = textDescriptions[num];
  scrollToSection('contact');
}

// accept cookies
function acceptCookies() {
  localStorage.setItem('cookies', true);
  document.getElementById('cookies').style.display = 'none';
}

// check if cookies have been accepted
function checkCookies() {
  const cookies = localStorage.getItem('cookies');
  if (cookies) {
    document.getElementById('cookies').style.display = 'none';
  }
}
