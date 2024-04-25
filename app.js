const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// https://flatuicolors.com/
const colors = [
    "#ff9ff3",
    "#ee5253",
    "#48dbfb",
    "#00d2d3",
    "#5f27cd",
    "#c8d6e5",
    "#feca57",
    "#2e86de",
    "#f368e0",
]

ctx.lineWidth = 2;

function onclick(event){
    ctx.beginPath();
    ctx.moveTo(0,0);
    const color = colors[Math.floor(Math.random() * colors.length)];
    ctx.strokeStyle = color;
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
}

// canvas.addEventListener("click", onclick);
canvas.addEventListener("mousemove", onclick);
