const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const users = require('./routes/users')



app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 8089

app.listen(PORT, (req, res) => {
    console.log('Server running at http://localhost:8089')
})