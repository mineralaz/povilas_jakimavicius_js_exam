/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */
const divEl = document.getElementById("output");
const ENDPOINT = "cars.json";
getData(ENDPOINT).then((carArr) => {
  console.log("carArr ===", carArr);
  generateCards(carArr);
});
/**
 * Functions
 */

function getData(url) {
  return fetch(url)
    .then((resp) => resp.json())
    .then((dataInJs) => dataInJs)
    .catch((err) => console.warn("error in getData", err));
}

function crEl(tagName, destination, elClass, text) {
  const el = document.createElement(tagName);
  el.className = elClass;
  el.textContent = text;
  destination.append(el);
  return el;
}

function generateCard(obj) {
  const articleEl = crEl("article", divEl, "card");
  const h2El = crEl("h2", articleEl, "", obj.brand);
  const modelsDivEl = crEl("div", articleEl, "carModels");
  obj.models.forEach((model) => {
    const pEl = crEl("p", modelsDivEl, "", model);
  });
  crEl("hr", articleEl, "");
}

function generateCards(arr) {
  arr.forEach((carObj) => {
    generateCard(carObj);
  });
}
