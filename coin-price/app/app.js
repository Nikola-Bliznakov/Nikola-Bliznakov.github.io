const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
let currency = 'USD';
let currentPrice = document.querySelector('.price');
const currencyInfo = document.querySelector('.currency');

// Assign function to get the json from the API
const checkPrice = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      currentPrice.innerHTML = data.bpi[currency].rate_float.toFixed(1);
    });
};

// Don't forget to actually run the function in order to work!
checkPrice();

// Select all the links in the nav menu
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    currency = this.getAttribute('data-currency');
    checkPrice();
    currencyInfo.innerHTML = `${currency} per BTC`;

    navLinks.forEach((link) => link.classList.remove('selected'));
    this.classList.add('selected');
  });
});

setInterval(() => {
  checkPrice();
}, 60000);
