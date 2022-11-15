/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum(a, b) {
    return a + b;
  }
  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
}

const calcClass = new Calculator();

console.log("calcClass.sum(5, 5) ===", calcClass.sum(5, 5));
console.log("calcClass.subtraction(5, 5) ===", calcClass.subtraction(5, 5));
console.log(
  "calcClass.multiplication(5, 5) ===",
  calcClass.multiplication(5, 5)
);
console.log("calcClass.division(5, 5) ===", calcClass.division(5, 5));
