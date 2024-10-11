function reverseInteger(n) {
 
  const resultStr = Math.abs(n).toString().split('').reverse().join('');
  
 
  const result = parseInt(resultStr, 10);
  
  
  return n < 0 ? -resultInt : resultInt;
}

//test
const number = parseInt(prompt("Enter an integer: "), 10);
console.log(reverseInteger(number));
