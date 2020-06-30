// your code goes in here
'use strict';

const quotes = [
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: '- Nelson Mandela',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing.',
    author: '- Walt Disney',
  },

  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: '- Steve Jobs',
  },

  {
    quote: 'If life were predictable it would cease to be life, and be without flavor.',
    author: '- Eleanor Roosevelt',
  },

  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
    author: '- Oprah Winfrey',
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: '- James Cameron',
  },
];

let author = document.getElementById('author');
let quote = document.getElementById('quote');

function createQuote() {
  let randNum = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[randNum].quote;
  author.innerText = quotes[randNum].author;
}

window.onload = createQuote;
let btn = document.getElementById('btn');
btn.addEventListener('click', createQuote);
