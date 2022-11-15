/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

const showKeys = showObjectKeys(audi);
console.log("showKeys ===", showKeys);
// function
function showObjectKeys(obj) {
  return Object.keys(obj);
}
