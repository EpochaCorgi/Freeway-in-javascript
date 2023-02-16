function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemEstrada);
  exibeAtor();
  exibeCarros();
  moveCarros();
  moveAtor();
  resetaPosicao();
  verificaColisao();
  exibeNivel();
  verificaNivelConcluido();
}
