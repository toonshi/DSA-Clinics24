function powerOfTwo(num) {
  return n>0 && (num & (num - 1))==0;
  
}

const number = parseInt(prompt("Enter an integer: "), 10);
if (powerOfTwo(number)) {
    console.log("True");
} else {
    console.log("False");
}