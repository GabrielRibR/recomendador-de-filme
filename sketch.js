let campoIdade;
let campoAventura;
let campoAcao;

function setup() {
  createCanvas(700, 400);
  createElement("h2", "Recomendador de filmes");
  
  const form = createElement("form");
  
  const idadeLabel = createElement("label", "Sua Idade:");
  idadeLabel.parent(form);
  campoIdade = createInput("5");
  campoIdade.parent(form);
  
  const aventuraLabel = createElement("label", "Gosta de Aventura?");
  aventuraLabel.parent(form);
  campoAventura = createCheckbox("");
  campoAventura.parent(form);
  
  const acaoLabel = createElement("label", "Gosta de Ação?");
  acaoLabel.parent(form);
  campoAcao = createCheckbox("");
  campoAcao.parent(form);
  
  const button = createButton("Recomendar Filme");
  button.parent(form);
  button.mousePressed(() => redraw());

  noLoop();
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
