const quote = document.querySelector('h1');
const author = document.querySelector('p');
const bodyBackground = document.querySelector('section');
const random = document.querySelector('.random');

const getQuote = function () {
  fetch('https://api.superhi.com/api/test/quotes/random')
    .then((response) => response.json())
    .then((jsonData) => {
      quote.innerHTML = `"${jsonData.quote}"`;
      author.innerHTML = `– ${jsonData.author}`;
    });
  bodyBackground.style.backgroundColor = `hsl(${
    Math.random() * 360
  }, 100%, 90%)`;
};

getQuote();

random.addEventListener('click', function () {
  getQuote();
});
