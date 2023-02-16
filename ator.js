//variáveis de posições
let xAtor = 100;
let yAtor = 366;
let dAtor = 30;
let vAtor = 5;
let colisao = false;
let nivel = 1;

function exibeAtor() {
  image(imagemAtor, xAtor, yAtor, dAtor, dAtor);
}

function moveAtor() {
  if (keyIsDown(UP_ARROW)) {
    if (yAtor > 0) {
      yAtor -= vAtor;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yAtor < 370) {
      yAtor += vAtor;
    }
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      wCarros,
      hCarros,
      xAtor,
      yAtor,
      10
    );
    if (colisao) {
      resetaPosicaoAtor();
      somColisao.play();
      if (nivel > 1) {
        nivel--;
      }
    }
  }
}

function resetaPosicaoAtor() {
  yAtor = 365;
}

function exibeNivel() {
  fill(255, 255, 0);
  textSize(20);
  text("Nível " + nivel, 50, 30);
}

function verificaNivelConcluido() {
  if (yAtor < 15) {
    nivel++;
    resetaPosicaoAtor();
    somPonto.play();    
  }
}
