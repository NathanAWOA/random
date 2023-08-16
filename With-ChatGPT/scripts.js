//esse fui eu que fiz para ver se eu estava entendendo
function age (currentYear, birthYear) {
    
    currentYear = 2023; //valor da variável
    birthYear = 1999;   //valor da variável
    const currentAge = currentYear - birthYear; //operação

    console.log(currentAge); //onde vai ser impresso o resultado
};

//necessario para executar a função
age(); //saida: 24


// copiada do chat gpt como exemplo de function anonima
var saudacao = function(nome) {
    console.log("Olá, " + nome + "!");
};

saudacao("Nathan"); //saida: Olá, Nathan!

//exemplo do chat gpt de arrow function

const quadrado = (x) => x * x; //x recebe x vezes x

console.log(quadrado(4)); // Saída: 16
