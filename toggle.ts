        // variable to store our intervalID
let nIntervId:undefined | number;
function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  let oElem = document.getElementById("my_box");
  if (oElem) {
    oElem.className = oElem.className === "go" ? "stop" : "go";
    
  }
  
}

function stopTextColor() {
  clearInterval(nIntervId);
  
  nIntervId = undefined;
}

document.getElementById("start")?.addEventListener("click", changeColor);
document.getElementById("stop")?.addEventListener("click", stopTextColor);

