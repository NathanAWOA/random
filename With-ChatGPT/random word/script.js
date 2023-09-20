// Objeto associando palavras com traduções
const wordTranslations = {
    "りんご": "maçã",
    "バナナ": "banana",
    "オランジーナ": "laranja",
    "ストロベリー": "morango",
    "葡萄": "uva",
    "車": "carro",
    "今日": "hoje",
    "おはおうございます": "bom dia",
    "お休みなさい": "boa noite",
    "ありがとうございます": "obrigado",
    "はい": "sim"
};

// Função para gerar uma palavra aleatória
function getRandomWord() {
    const words = Object.keys(wordTranslations);
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Função para verificar a resposta
function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value;
    const randomWord = document.getElementById("random-word").textContent;

    if (userAnswer.toLowerCase() === wordTranslations[randomWord].toLowerCase()) {
        document.getElementById("result").textContent = "Parabéns! Você acertou.";
    } else {
        document.getElementById("result").textContent = "Ops! Tente novamente.";
    }

    document.getElementById("correct-answer").textContent = wordTranslations[randomWord];

    // Gerar uma nova palavra aleatória
    document.getElementById("random-word").textContent = getRandomWord();
    document.getElementById("user-answer").value = "";
}

// Inicialização
document.getElementById("random-word").textContent = getRandomWord();
