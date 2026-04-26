const colorCodeContainer = document.getElementById("color-code")
let randomColor = null;

function generateRandomNumberBetween(min, max){
    return min + Math.floor(Math.random() * (max-min + 1))
}


function generateRandomColorRGB(){
    const red = generateRandomNumberBetween(0, 255);
    const green = generateRandomNumberBetween(0, 255);
    const blue = generateRandomNumberBetween(0, 255);
    return `rgb(${red}, ${green}, ${blue})`;
}

function startGame(){
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;
}

window.addEventListener("load", () => startGame())