let campoIdade;
let campoAventura;
let campoAcao;
let botaoRecomendar;

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
    desenhaRecomendacao(recomendacao);
  });
}

function desenhaRecomendacao(recomendacao) {
  background("white");
  fill(color(77, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(28);
  text(recomendacao, width / 2, height / 2);
}
