const express = require('express')
const router = express.Router()

router.get('/home', (req, res) => {
    /*Não sei o por que, mas o caminho resumido não tava funcionando e tive que usar um caminho mais extenso para chegar ao arquivo. Pelo menos ta funcionando agora*/
    
    res.render('../views/users/home')
})

router.get('/posts', (req, res) => {
    res.render('../views/users/posts')
})

router.get('/about', (req, res) => {
    res.render('../views/users/about')
})

module.exports = router