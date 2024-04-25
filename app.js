const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

ctx.rect(50,50,100,100);
ctx.rect(150,150,100,100);
ctx.rect(250,250,100,100);
ctx.fill();

ctx.beginPath();
ctx.rect(350,350,100,100);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.rect(450,450,100,100);
ctx.fillStyle = "green"
setTimeout(()=>{
    ctx.fill();
}, 3000);

