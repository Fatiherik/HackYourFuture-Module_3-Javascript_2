/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */
'use strict';

function createBookList(books) {
  // your code goes in here, return the ul element
  const ul = document.createElement('ul');
  ul.style.display = 'flex';
  ul.style.padding = '20px';
  ul.style.margin = '80px';
  ul.style.listStyleType = 'none';
  document.body.appendChild(ul);

  books[0].url =
    'https://images-na.ssl-images-amazon.com/images/I/51MzbjxE7bL._SX376_BO1,204,203,200_.jpg';
  books[1].url = 'https://i.pinimg.com/originals/98/64/43/9864437dfb220d6e780b3a0d5b2d9dda.jpg';
  books[2].url = 'https://i.pinimg.com/originals/24/72/e4/2472e42ecb38a2366519621287ddb72c.jpg';

  for (let book of books) {
    const li = document.createElement('li');
    li.style.padding = '10px';
    li.style.margin = '30px';

    const bookPtag = document.createElement('p');
    bookPtag.innerText = book.title + ' - ' + book.author;
    li.appendChild(bookPtag);

    const bookImg = document.createElement('img');
    bookImg.src = book.url;
    bookImg.style.width = '300px';
    bookImg.style.height = '350px';
    li.appendChild(bookImg);

    if (book.alreadyRead) {
      li.style.backgroundColor = 'green';
    } else {
      li.style.backgroundColor = 'red';
    }
    ul.appendChild(li);
  }
  return ul;
}

const books = [
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false,
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true,
  },
];

let ulElement = createBookList(books);

document.querySelector('#bookList').appendChild(ulElement);
