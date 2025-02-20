const quotes = [
    "The best way to predict the future is to invent it. - Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "Whether you think you can or you think you can't, you're right. - Henry Ford"
    // Add more quotes as needed
];

const newQuoteButton = document.getElementById('newQuote');
const quoteBox = document.getElementById('quote');
const NightModeButton = document.getElementById('NightMode');
const body = document.body;

newQuoteButton.addEventListener('click', generateQuote);
NightModeButton.addEventListener('click', toggleNightMode);

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteBox.innerText = quotes[randomIndex];
}

function toggleNightMode() {
    body.classList.toggle('night-mode');
}
