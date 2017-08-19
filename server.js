const express = require('express')
const methOver = require('method-override')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => console.log(`App running on port: ${PORT}`))