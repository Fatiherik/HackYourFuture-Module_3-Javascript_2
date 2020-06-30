/**
 
 ** Exercise 1: Add Six **
 
Declare a function called `createBase`.The function takes a number as a parameter and
return a closure, that adds a number to the base number argument.

Call the function three times. The return values should be:
 15, 24,  36

 */

function createBase(number) {
  let multiplier = 0;
  let total = 9;
  return function () {
    total += number + (multiplier * number) / 2;
    multiplier++;
    return total;
  };
}

const addSix = createBase(6);

// Put here your function calls...
console.log(addSix());
console.log(addSix());
console.log(addSix());
