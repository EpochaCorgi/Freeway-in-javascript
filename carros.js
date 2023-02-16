let xCarros = [-50, -50, -50, 600, 600, 600];
let yCarros = [40, 95, 150, 210, 265, 310];
let wCarros = 60;
let hCarros = 40;
let vCarros = [7, 6, 5, 4, 3, 2];

function exibeCarros() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], wCarros, hCarros);
  }
}

function moveCarros() {
  for (let i = 0; i < xCarros.length; i++) {
    xCarros[i] -= vCarros[i];
  }
}

function resetaPosicao() {
  for (let i = 0; i < xCarros.length; i++) {
    if (xCarros[i] < -60) {
      xCarros[i] = 600;
    }
  }
}


