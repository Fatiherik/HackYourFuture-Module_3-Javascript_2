/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9,
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// In the first example the value of the "val" only changes within the function or between {} in other words,
// The changes are not reflected outside the function.
//So the result will be 9 again.

// On the other hand, even if it can be seen the same with the first example, when you change the value of the properties of an object,
// The changes are reflected outside the function.
//So the result will be 10.
