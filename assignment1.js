/*
- Check if all numbers are divisible by 5. Cache the result in a variable.
- Check if the first number is larger than the last. Cache the result in a variable.
- Accomplish the following arithmetic chain:
      -Subtract the first number from the second number.
      -Multiply the result by the third number.
      -Find the remainder of dividing the result by the fourth number.
- Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) 
  in other logic comparisons. Rename the variable as appropriate.

*/


const n1 = 10; 
const n2 = 15; 
const n3 = 20; 
const n4 = 5;  

// Check if all numbers are divisible by 5. Cache the result in a variable.
const result1 = (n1 % 5 === 0) && (n2 % 5 === 0) && (n3 % 5 === 0) && (n4 % 5 === 0);
console.log("Numbers divided by 5 is " + result1);

// Check if the first number is larger than the last. Cache the result in a variable.
const result2 = n1 > n4;
console.log("First is larger than Last is " + result2);

// Subtract the first number from the second number,  Multiply the result by the third number,  Find the remainder of dividing the result by the fourth number
const result3 = ((n2 - n1) * n3) % n4;
console.log("subtract, multiply and find the result fourth is " + result3);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const result4 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log("not use ! is " + result4);





