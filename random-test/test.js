const prompt = require("prompt-sync")({sigint:true})
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

console.log("Write something")

let word = prompt("")

wordSplited = word.split([])

for(i = 0; i < wordSplited.length; i++){
    if(wordSplited[i] === 'a'){
        console.log("yep")
    } else {
        console.log('nop')
    }

    /*for usando o j agr para passar pelo alphabet dentro desse for somar j mais 5 (ou qualquer que seja a chave de decodificação) depois criar um if que defini que se o valor de j ficar superior ao length de alphabet então ele passara primeiro por uma subtração onde sera feito j menos alphabet.length assim criando uma impressão de loop*/
}