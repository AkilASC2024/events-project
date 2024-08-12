let aquaButton = document.getElementById("aqua");
let tealButton = document.getElementById("teal");
let pinkButton = document.getElementById("pink");
let purpleButton = document.getElementById("purple");
let colorlessButton = document.getElementById("colorless");
let colorDisplay = document.getElementById("color-display");

function changeColorToAqua() {
    colorDisplay.style.backgroundColor = "aqua";
    colorDisplay.innerText = "aqua";
}

function changeColorToTeal() {
    colorDisplay.style.backgroundColor = "teal";
    colorDisplay.innerText = "teal";
}

function changeColorToPink() {
    colorDisplay.style.backgroundColor = "pink";
    colorDisplay.innerText = "pink";
}

function changeColorToPurple() {
    colorDisplay.style.backgroundColor = "purple";
    colorDisplay.innerText = "purple";
}

function changeColorToNone() {
    colorDisplay.style.backgroundColor = "white";
    colorDisplay.innerText = "colorless";
}

aquaButton.addEventListener("click", changeColorToAqua)
tealButton.addEventListener("click", changeColorToTeal)
pinkButton.addEventListener("click", changeColorToPink)
purpleButton.addEventListener("click", changeColorToPurple)
colorlessButton.addEventListener("click", changeColorToNone)