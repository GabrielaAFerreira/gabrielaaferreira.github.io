var imagens = [
  "imagens/frankgaleria_2.png",
  "imagens/frankgaleria_3.png",
  "imagens/franknolab.png"
];

var indice = 0;
var intervalo;

function iniciarTransicao() {
  intervalo = setInterval(transicaoImagem, 10000);
}

function pararTransicao() {
  clearInterval(intervalo);
}

function transicaoImagem() {
  var imagem = document.getElementById("imagem");
  
  indice++;
  
  if (indice >= imagens.length) {
    indice = 0;
  }
  
  imagem.src = imagens[indice];
}

window.onload = iniciarTransicao;