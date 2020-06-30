/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

'use strict';
//Change the body tag 's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

//Replace each of the spans(nickname, fav - food, hometown) with your own information.
document.getElementById('nickname').textContent = 'Fatih';
document.getElementById('fav-food').textContent = 'Hamburger';
document.getElementById('hometown').textContent = 'Istanbul';

//Iterate through each li and change the class to "list-item".
const items = document.getElementsByTagName('li');
for (let item of items) {
  item.className = 'list-item';
}

//Create a new img element and set its src attribute to a picture of you.Append that element to the page.
const myImg = document.createElement('img');
myImg.setAttribute('src', 'https://ca.slack-edge.com/T0EJTUQ87-UTW55CEUU-4f147ae12153-48');
myImg.setAttribute('width', '25%');

const ul = document.querySelector('ul');
document.body.insertBefore(myImg, ul);
