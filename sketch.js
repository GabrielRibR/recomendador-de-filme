// Acao, aventura, drama, comedia

// Divertida mente 2, LIVRE, aventura
// Como treinar o seu dragao 3, LIVRE, acao, aventura

// As aventura de pi,10, aventura
// Depois da chuva, 10, drama
// Godzilla e kong: O novo imperio, 12, acao, aventura
// Homem aranha: no aranhaverso, 12, comedia
// Missao: impossivel- efeito fallout, 14, acao

let campoIdade;
let campoAventura;
let campoAcao;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua Idade:");
  campoIdade = createInput("5");
  campoAventura = createCheckbox("Gosta de Aventura?");
  campoAcao = createCheckbox("Gosta de Acao?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeAventura = campoAventura.checked();
  let gostaDeAcao = campoAcao.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeAcao);
  fill(color(77, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(28);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeAcao) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Missao:Impossivel-Efeito fallout";
    } else {
      if (idade >= 12) {
        if(gostaDeAventura || gostaDeAcao) {
          return "Homem aranha: no aranhaverso";
        } else {
            return "Godzilla e kong: O novo imperio";
        }
      
      } else {
        if (gostaDeAventura) {
          return "As aventura de pi";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "Como treinar o seu dragao 3";
    } else {
      return "Divertida mente 2";
    }
  }
}
