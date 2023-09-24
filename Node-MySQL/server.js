//EXPRESS
const express = require('express')
const app = express()

//SOCKET.IO
const socket = require('socket.io')

//PORT
const PORT = process.env.PORT || 8084

//HTTP
const http = require('http')
const httpServer = http.createServer(app)
const io = socket(httpServer, {
    path: '/socket.io'
})

//SEQUILIZE
const Sequilize = require('sequelize')
const sequilize = new Sequilize('teste', 'root', 'password123A$', {
    host: 'localhost',
    dialect: 'mysql'
})

const userId = []

//ARRAY DOS DADOS VINDOS DO FRONT
let wordsInfo = []
let test = []
//CONNECTION
io.on('connection', (client) => {
    console.log(`O usuário com o id "${client.id}" acabou de logar.`)
    userId.push(client)

    client.on('disconnect', () => {
        userId.splice(userId.indexOf(client), 1)
    })

    client.on('sendData', data => {
        wordsInfo.push(data)
        console.log(data)
        
        const lang = sequilize.define(
            'words', {
                hiragana: {
                    type: Sequilize.STRING
                },
                katakana: {
                    type: Sequilize.STRING
                },
                kanji: {
                    type: Sequilize.STRING
                },
                br: {
                    type: Sequilize.STRING
                }
            }
        )
        
        //NECESSARIO RODAR ISSO ANTES DE ADD DADOS AO DB
        /*lang.sync({force: true})*/
        
        //INSERT INTO + VALUES
        /*
        lang.create({
            hiragana: "だれ",
            katakana: "",
            kanji: "誰",
            br: "Quem"
        })  
        */
    })
})

//MANIPULANDO DB COM SEQUELIZE
sequilize.authenticate().then(function() {
    console.log('Connect')
}).catch(function(erro) {
    console.log(`Fail: ${erro}`)
})

//PATH
    app.use(express.static(__dirname + '/pages'))

//PORTA
httpServer.listen(PORT, () => {
    console.log(`Server running at http://localhost:8084`)
})