let campoIdade;
let campoAventura;
let campoAcao;
let botaoRecomendar;
let corTexto = '#ff0033'; // Cor do texto fixa

function setup() {
  // Define o tamanho do canvas e o fixa no body
  let cnv = createCanvas(700, 400);
  cnv.parent(document.body);

  // Cria o formulário para a interface
  let form = createDiv().id("form-container");
  form.parent(document.body);

  createElement("h2", "Recomendador de Filmes").parent(form);

  let labelIdade = createSpan("Sua Idade:").parent(form);
  campoIdade = createInput("5").parent(form);

  campoAventura = createCheckbox("Gosta de Aventura?").parent(form);
  campoAcao = createCheckbox("Gosta de Ação?").parent(form);

  botaoRecomendar = createButton("Recomendar").parent(form);
  botaoRecomendar.mousePressed(() => {
    let idade = parseInt(campoIdade.value());
    let gostaDeAventura = campoAventura.checked();
    let gostaDeAcao = campoAcao.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeAventura, gostaDeAcao);
    desenhaRecomendacao(recomendacao); // Chama a função para desenhar a recomendação
  });
}

function desenhaRecomendacao(recomendacao) {
  // Desenha o fundo do canvas com cor fixa
  background('#2c2c2c'); 

  // Define a cor do texto para o tema
  fill(corTexto);
  textAlign(CENTER, CENTER);
  textSize(28);

  // Centraliza o texto no canvas
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeAventura, gostaDeAcao) {
  let filmes = {
    1: ["O Show da Luna", "Masha e o Urso", "Galinha Pintadinha", "Patrulha Canina"],
    2: ["Peppa Pig", "Dora, a Aventureira", "Trolls", "Meu Amigo Totoro"],
    3: ["Shrek", "Toy Story", "Frozen", "Os Minions"],
    4: ["Carros", "Os Incríveis", "Detona Ralph", "Divertida Mente"],
    5: ["Moana", "Zootopia", "Procurando Nemo", "Kung Fu Panda"],
    6: ["O Rei Leão", "Como Treinar o Seu Dragão", "Valente", "Hotel Transilvânia"],
    7: ["Enrolados", "Os Croods", "O Lorax", "Monstros S.A."],
    8: ["Ratatouille", "Os Pinguins de Madagascar", "Bolt", "A Era do Gelo"],
    9: ["Megamente", "Aviões", "O Grinch", "Os Smurfs"],
    10: ["Madagascar", "Shrek 2", "Meu Malvado Favorito", "Turbo"],
    11: ["Homem-Aranha no Aranhaverso", "Big Hero 6", "Viva - A Vida é uma Festa", "Wall-E"],
    12: ["As Aventuras de Pi", "Jumanji: Bem-Vindo à Selva", "Guardiões da Galáxia", "O Hobbit"],
    13: ["Harry Potter e a Pedra Filosofal", "Jogos Vorazes", "Star Wars: O Despertar da Força", "Pantera Negra"],
    14: ["Vingadores: Ultimato", "Missão Impossível - Efeito Fallout", "Transformers", "Capitã Marvel"],
    15: ["Mad Max: Estrada da Fúria", "Coringa", "Matrix", "John Wick"],
    16: ["Logan", "V de Vingança", "Blade Runner 2049", "Homem de Ferro"],
    17: ["Inception", "O Cavaleiro das Trevas", "Duna", "Tenet"],
    18: ["Gladiador", "O Resgate do Soldado Ryan", "Clube da Luta", "O Poderoso Chefão"]
  };

  // Verifica se a idade está no intervalo de 1 a 18
  if (idade < 1 || idade > 18 || !filmes[idade]) {
    return "Idade inválida. Por favor, insira uma idade entre 1 e 18.";
  }

  let opcoes = filmes[idade];

  // Retorna a recomendação baseada nas preferências
  if (gostaDeAventura && gostaDeAcao) {
    return opcoes[0];
  } else if (gostaDeAventura) {
    return opcoes[1];
  } else if (gostaDeAcao) {
    return opcoes[2];
  } else {
    return opcoes[3];
  }
}
