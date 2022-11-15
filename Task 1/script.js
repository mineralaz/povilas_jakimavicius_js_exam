/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const divEl = document.getElementById("output");
const formEl = document.forms[0];
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  const weightInpEl = document.getElementById("search");
  const kg = weightInpEl.value.trim();

  generateConvertedAnswer(kg);
});

/**
 *
 * Functions
 *
 */
function toLb(kg) {
  const result = kg * 2.2046;
  return result;
}
function toG(kg) {
  const result = kg / 0.001;
  return result;
}
function toOz(kg) {
  const result = kg * 35.274;
  return result;
}
function crEl(tagName, destination, elClass, text) {
  const el = document.createElement(tagName);
  el.className = elClass;
  el.textContent = text;
  destination.append(el);
  return el;
}
function generateConvertedAnswer(kg) {
  divEl.innerHTML = "";
  crEl("h2", divEl, "toLb", `${toLb(kg)} lb`);
  crEl("h2", divEl, "toG", `${toG(kg)} g`);
  crEl("h2", divEl, "toOz", `${toOz(kg)} oz`);
}
