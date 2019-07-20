window.addEventListener("deviceorientation", handleOrientation, true);

var b  = document.body
setGradient(0)
b.innerText = 0 + "°"

function handleOrientation(e) {
  var gamma    = Math.round(e.gamma * 100) / 100;

  b.innerText = gamma + "°"
  setGradient(gamma)
}


function setGradient(angle) {
  b.style.backgroundImage = "linear-gradient(" + angle + "deg, lightcoral 0%, lightcoral 50%, lightgreen 50%, lightgreen 100%)"
}