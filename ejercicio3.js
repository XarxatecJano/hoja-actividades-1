const num1 = parseInt(prompt("Introduce un número: "));
const num2 = parseInt(prompt("Introduce otro número: "));
let result = num1+num2;
if (num1==num2) result += num1;
console.log(result);