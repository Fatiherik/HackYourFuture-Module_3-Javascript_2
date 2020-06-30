/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    console.log(a);
  };
})();

x();

//"a" is assigned as a value of 10 in global scope.
// Therefore, it is accessible from everywhere, within the function as well.
// So when you reassingned "a" as 12, the new value of "a" will be 12.
//Due to "a" is also accessible from the closure (second function), the function will alert 12.
