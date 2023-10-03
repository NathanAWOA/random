const express = require('express')
const handlebars = require('express-handlebars')
const app = express()
const users = require('./routes/users')
const path = require('path')



app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))

app.set('view engine', 'handlebars')

/*CSS, JS e Midias que estiverem nessa pasta public poderam ser acessados a partir de qualquer arquivo do projeto*/
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', users)

const PORT = process.env.PORT || 8089

app.listen(PORT, (req, res) => {
    console.log('Server running at http://localhost:8089')
})