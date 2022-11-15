/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
/*  
<div id="btn__element">CLICK ME</div>
<div id="btn__state">0</div>
*/
const btnEl = document.getElementById("btn__element");
let sum = 0;
btnEl.addEventListener("click", calcBtnClicks);

// function
function calcBtnClicks() {
  const btnClicked = document.getElementById("btn__state");
  sum += 1;
  btnClicked.textContent = sum;
  return sum;
}
