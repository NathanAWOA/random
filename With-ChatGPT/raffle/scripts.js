/*
// chat gpt

const sortearButton = document.getElementById('sortear');
const resultadoParagraph = document.getElementById('resultado');

sortearButton.addEventListener('click', () => {
  const numeroSorteado = Math.floor(Math.random() * 100) + 1; // Gera um número aleatório entre 1 e 100
  resultadoParagraph.textContent = `Número sorteado: ${numeroSorteado}`;
});
*/

// sorteador de imagens

const sortearButton = document.getElementById('sortear');
const imagemContainer = document.getElementById('imagem-container');

//array com as imagens
const imagens = [
  'img/imagem1.jpg',
  'img/imagem2.avif',
  'img/imagem3.gif',
  // Adicione mais URLs de imagens aqui
];

sortearButton.addEventListener('click', () => {
  const numeroSorteado = Math.floor(Math.random() * imagens.length);
  const imagemSorteada = imagens[numeroSorteado];
  imagemContainer.innerHTML = `<img src="${imagemSorteada}" alt="Imagem Sorteada">`;
});

/*adiciona um evento ao botão sortear

o evento é acionado quando o botão for clicado

ao ser clicado uma função anonima é executada

a função anonima por recebe os comando por uma arrow function

é declarado uma constante que sorteia um numero referente ao maximo de possibilidades que tem dentro do array

é declarada uma constante que pega o numero sorteado e o relaciona as url das imagens dentro da array

então fazemos com que a constante que recebe a imagem padrão do html, envie para o html uma nova tag com a nova imagem que foi sorteada linkada nela, assim a imagem sorteada ira subistituir a imagem padrão

obs: innerHTML, literalmente é usado para inserir algo no html pelo script, usando a constante que recebe algum elemento do html. o que tiver dentro desse elemento ou o proprio elemento sera subistituido/ alterado.
*/

// feito por mim