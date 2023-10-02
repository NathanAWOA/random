const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    /*Não sei o por que, mas o caminho resumido não tava funcionando e tive que usar um caminho mais extenso para chegar ao arquivo. Pelo menos ta funcionando agora*/
    
    res.render('../views/users/homeToUsers.handlebars')
})

module.exports = router