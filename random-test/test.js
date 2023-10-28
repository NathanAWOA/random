const prompt = require("prompt-sync")({sigint:true})
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

console.log("Write something")

let word = prompt("")

wordSplited = word.split([])

for(i = 0; i < wordSplited.length; i++){
    codify()
}

function codify(){
    let key = 5
    if(wordSplited[i] === 'a'){
        console.log(alphabet[4])
    }
    if(wordSplited[i] === 'b'){
        console.log(alphabet[key])
    }
    if(wordSplited[i] === 'c'){
        console.log(alphabet[1+key])
    }
    if(wordSplited[i] === 'd'){
        console.log(alphabet[2+key])
    }
    if(wordSplited[i] === 'e'){
        console.log(alphabet[3+key])
    }
    if(wordSplited[i] === 'f'){
        console.log(alphabet[4+key])
    }
    if(wordSplited[i] === 'g'){
        console.log(alphabet[5+key])
    }
    if(wordSplited[i] === 'h'){
        console.log(alphabet[6+key])
    }
    if(wordSplited[i] === 'i'){
        console.log(alphabet[7+key])
    }
    if(wordSplited[i] === 'j'){
        console.log(alphabet[8+key])
    }
    if(wordSplited[i] === 'k'){
        console.log(alphabet[9+key])
    }
    if(wordSplited[i] === 'l'){
        console.log(alphabet[10+key])
    }
    if(wordSplited[i] === 'm'){
        console.log(alphabet[11+key])
    }
    if(wordSplited[i] === 'n'){
        console.log(alphabet[12+key])
    }
    if(wordSplited[i] === 'o'){
        console.log(alphabet[13+key])
    }
    if(wordSplited[i] === 'p'){
        console.log(alphabet[14+key])
    }
    if(wordSplited[i] === 'q'){
        console.log(alphabet[15+key])
    }
    if(wordSplited[i] === 'r'){
        console.log(alphabet[16+key])
    }
    if(wordSplited[i] === 's'){
        console.log(alphabet[17+key])
    }
    if(wordSplited[i] === 't'){
        console.log(alphabet[18+key])
    }
    if(wordSplited[i] === 'u'){
        console.log(alphabet[19+key])
    }
    if(wordSplited[i] === 'v'){
        console.log(alphabet[20+key])
    }
    if(wordSplited[i] === 'w'){
        console.log(alphabet[key-5])
    }
    if(wordSplited[i] === 'x'){
        console.log(alphabet[key-4])
    }
    if(wordSplited[i] === 'y'){
        console.log(alphabet[key-3])
    }
    if(wordSplited[i] === 'z'){
        console.log(alphabet[key-2])
    }
}