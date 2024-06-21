//variaveis da bolinha
let xBolinha = 300
let yBolinha = 200
let diametro = 17
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 2;
let velocidadeYBolinha = 2;

// variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;
let colidiu = false;

//variaveis do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar do Jogo
let meusPontos = 0;
let pontosDoOponente = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete,yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  movimentaRaqueteOponente();
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  
  incluiPlacar();
  
function mostraBolinha(){
 circle(xBolinha,yBolinha,diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio < 0)
    velocidadeXBolinha *= -1;
  }

if (yBolinha + raio > height || yBolinha - raio < 0)
velocidadeYBolinha *= -1}

function mostraRaquete(x,y){
  rect(x,y,raqueteComprimento ,raqueteAltura);
  
}


function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        yRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yRaquete += 10;
    }
}

 function verificaColisaoRaquete(x,y) {
    if (xBolinha - raio < x + raqueteComprimento
        && yBolinha - raio < y + raqueteAltura
        && yBolinha + raio > y) {
        velocidadeXBolinha *= 1;
    }
}

function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function colisaoRaqueteOponenteBiblioteca() {
    colidiu = collideRectCircle(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function  movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - raqueteComprimento / 2 - 30
  yRaqueteOponente += velocidadeYOponente
}

function incluiPlacar(){
  fill (255)
  text(meusPontos, 270, 26);
  text(pontosDoOponente, 321, 26)
  
  
}