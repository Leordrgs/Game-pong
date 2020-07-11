var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var teclas = {};



// Variáveis da bola
var bola  = 
{
    x: canvas.width/2 - 15,
    y: canvas.height/2 - 15,
    raio: 10,
    dirx: -1,
    diry: 1,
    mod: 0,
    speed: 2
};

// Variáveis da barra da esquerda 
var esquerda = 
{
    x: 10,
    y: canvas.height /2 -60,
    altura : 120,
    largura: 30,
    score: 0,
    speed: 10
};

// Variáveis da barra da direita
var direita = 
{
    x: 560,
    y: canvas.height /2 -60,
    altura : 120,
    largura: 30,
    score: 0,
    speed: 10
};

document.addEventListener("keydown", function (e) 
{
    teclas[e.keyCode] = true;
//    alert(e.keyCode);  
}, false);

document.addEventListener("keyup", function (e)
{
    delete teclas[e.keyCode];
}, false);



function movebloco()
{
    if (87 in teclas && esquerda.y > 0)
    {
        esquerda.y-=esquerda.speed;
    }

    else if (83 in teclas && esquerda.y + esquerda.altura < canvas.height)
    {
        esquerda.y += esquerda.speed;
    }
    
    if (38 in teclas && direita.y > 0)
    {
        direita.y -= direita.speed;
    }

    else if (40 in teclas && direita.y + direita.altura < canvas.height)
    {
        direita.y += direita.speed;
    }

}


// Movimentando a bola
function movebola()
{
    if (bola.y + bola.raio >= esquerda.y && bola.y <= esquerda.y + esquerda.altura && bola.x <= esquerda.x + esquerda.largura)
    {
        bola.dirx = 1;
        bola.mod += 0.2;
    } else if (bola.y + bola.raio >= direita.y && bola.y <= direita.y + direita.altura && bola.x + bola.raio >= direita.x) 
        {
            bola.dirx = -1;
            bola.mod += 0.2;
        }

    if (bola.y <= 0)
    {
        bola.diry = 1;
    } else if (bola.y + bola.raio >= canvas.height)
        {
            bola.diry = -1;
        }

    bola.x += (bola.speed + bola.mod) * bola.dirx;
    bola.y += ( bola.speed + bola.mod) * bola.diry;
    
    if (bola.x < esquerda.x + esquerda.largura - 15)
    {
        newgame("Jogador 2");
    } else if (bola.x + bola.raio > direita.x + 15)
    {
        newgame("Jogador 1");
    }
}


// Contagem de pontos 
function newgame(winner)
{
    if (winner == "Jogador 1")
    {
        esquerda.score++; 
    }   else 
    {
        direita.score++;
    }

    if (esquerda.score == 5)
    {
        alert("Jogador 1 ganhou!!");
        window.location.reload();
    } else if (direita.score == 5)
    {
        alert("Jogador 2 ganhou!!");
        window.location.reload();
    }
    
    esquerda.y = canvas.height/2 - esquerda.altura/2;
    direita.y = esquerda.y;
    bola.y = canvas.height/2 - bola.raio/2;
    bola.x = canvas.width/2 - bola.raio/2;
    bola.mod = 0;
}

//Desenho completo 
function desenha()
{
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movebloco();
    movebola();

    ctx.fillStyle = "white";
    ctx.fillRect(esquerda.x, esquerda.y, esquerda.largura, esquerda.altura);
    ctx.fillRect(direita.x, direita.y, direita.largura, direita.altura); 
    ctx.beginPath();
    ctx.arc( bola.x, bola.y, bola.raio, 0, Math.PI * 2);
    ctx.fill();  
    ctx.closePath();
  

    ctx.font = "20px Arial ";
    ctx.fillText("Jogador 1: " + esquerda.score, 50, 20);
    ctx.fillText("Jogador 2: " + direita.score, canvas.width - 150, 20);
}

setInterval(desenha, 15);