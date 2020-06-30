/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */

// WRITE YOUR FUNCTION HERE

let letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
let lettersCopy = letters;

function removeDuplicates(array) {
  array = [...new Set(array)];
  return array;
}

console.log(removeDuplicates(letters));

if (letters === ['a', 'b', 'c', 'd', 'e', 'f']) {
  console.log('Hooray!');
}
