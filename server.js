const express = require('express')
const router = require('./controller/burgers_controller')

const methOver = require('method-override')
const bodyParser = require('body-parser')

const exphbs = require('express-handlebars')

const PORT = 3000
const app = express()

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(router)

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))