let campoIdade;
let campoAventura;
let campoAcao;
let botaoRecomendar;
let corTexto = '#4D0073'; // Cor inicial do texto

function setup() {
  createCanvas(700, 400);
  let form = createDiv().id("form-container");
  form.parent(document.body);

  createElement("h2", "Recomendador de Filmes").parent(form);

  let labelIdade = createSpan("Sua Idade:").parent(form);
  campoIdade = createInput("5").parent(form);

  campoAventura = createCheckbox("Gosta de Aventura?").parent(form);
  campoAcao = createCheckbox("Gosta de Ação?").parent(form);

  botaoRecomendar = createButton("Recomendar").parent(form);
  botaoRecomendar.mousePressed(() => {
    let idade = campoIdade.value();
    let gostaDeAventura = campoAventura.checked();
    let gostaDeAcao = campoAcao.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeAcao);
    corTexto = corAleatoria(); // Gera uma cor aleatória
    desenhaRecomendacao(recomendacao);
  });
}

function desenhaRecomendacao(recomendacao) {
  background(lerpColor(color('#8360c3'), color('#2ebf91'), random()));
  fill(corTexto);
  textAlign(CENTER, CENTER);
  textSize(28);

  // Posiciona o texto em uma posição aleatória dentro do canvas
  let x = random(width * 0.3, width * 0.7);
  let y = random(height * 0.3, height * 0.7);

  text(recomendacao, x, y);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeAcao) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Missão: Impossível - Efeito Fallout";
    } else {
      if (idade >= 12) {
        if(gostaDeAventura || gostaDeAcao) {
          return "Homem-Aranha: No Aranhaverso";
        } else {
          return "Godzilla e Kong: O Novo Império";
        }
      } else {
        if (gostaDeAventura) {
          return "As Aventuras de Pi";
        } else {
          return "Depois da Chuva";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "Como Treinar o Seu Dragão 3";
    } else {
      return "Divertida Mente 2";
    }
  }
}

function corAleatoria() {
  return color(random(255), random(255), random(255));
}
