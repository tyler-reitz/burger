const express = require('express')
const router = require('./controller/burgers_controller')

const methOver = require('method-override')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.use(router)

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))