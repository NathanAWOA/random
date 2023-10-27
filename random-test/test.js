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
}