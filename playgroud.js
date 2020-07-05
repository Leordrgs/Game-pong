let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.beginPath(); //Inicia o desenho em tela 
ctx .rect(20, 40, 50, 50); //Desenha um quadrado nessas posições da tela
ctx.fillstyle = "#ff0000"; //Pinta de vermelho 
ctx.fill(); //Pinta o quadrado
ctx.closePath(); //Termina o respectivo desenho 

ctx.beginPath() //Inicia o desenho em tela
ctx.arc (240, 160, 20, 0, Math.PI * 2, false);
ctx.fillstyle "green" //Pinta de verde
ctx.fill(); //Pinta a bola
ctx.closePath(); //Termina o respectivo desenho

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, 0.5)"
ctx.stroke();
ctx.closePath();



