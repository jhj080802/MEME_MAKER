const canvas = document.querySelector("canvas");

const context = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;

context.strokeRect(50,50,100,200);