/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const divEl = document.getElementById("output");
const btnEl = document.getElementById("btn");
const ENDPOINT = "https://api.github.com/users";

btnEl.addEventListener("click", () => {
  getData(ENDPOINT).then((userArr) => {
    const messagePEl = document.getElementById("message");
    generateCards(userArr);
    if (divEl.innerHTML !== "") {
      messagePEl.classList.add("hide");
    } else {
      messagePEl.classList.remove("hide");
    }
  });
});

/**
 * Funciotns
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
  const imgEl = crEl("img", articleEl, "");
  imgEl.src = obj.avatar_url;
  const h2El = crEl("h2", articleEl, "", obj.login);
}

function generateCards(arr) {
  arr.forEach((userObj) => {
    generateCard(userObj);
  });
}
