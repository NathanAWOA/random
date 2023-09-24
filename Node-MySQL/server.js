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
const sequilize = new Sequilize('nihongo', 'root', 'password123A$', {
    host: 'localhost',
    dialect: 'mysql'
})

const Words = sequilize.define(
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
//Words.sync({force: true})


const userId = []
//ARRAY DOS DADOS VINDOS DO FRONT
let wordsReceived = []

//CONNECTION
io.on('connection', (client) => {
    console.log(`O usuário com o id "${client.id}" acabou de logar.`)
    userId.push(client)

    client.on('disconnect', () => {
        userId.splice(userId.indexOf(client), 1)
    })

    client.on('sendData', allWords => {
        wordsReceived.push(allWords)//FUNCIONARIA COM CONCAT() TBM
        console.log(allWords)
        
        async function inserirDados() {
        try {
            //INSERE OS DADOS NO MYSQL
            const result = await Words.create(allWords)
            console.log('Dados inseridos com sucesso: ', result.toJSON())
        }catch(erro) {
            console.log('Erro ao inserir dados no MySQL: ', erro)
        }}

        inserirDados()
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