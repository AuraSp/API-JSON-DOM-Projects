// 1
// const background = () => {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = "#" + randomColor;
// }

// const button = document.getElementById('generatingColors');
// button.addEventListener("click", background);
// background();


// 2
function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
}

console.log(randomInteger(255));

function randomRgbColor() {
    var r = randomInteger(255);
    var g = randomInteger(255);
    var b = randomInteger(255);
    let bgColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    return bgColor;
}

console.log(randomRgbColor(255));

const button = document.getElementById('generatingColors');
button.addEventListener("click", () => (body.style.backgroundColor = randomRgbColor()));