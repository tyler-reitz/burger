const express = require('express')
const burger = require('../models/burger')
const path = require('path')

const router = express.Router()

const getPath = (url) => path.join(__dirname, '..', '/views/', `${url}.handlebars`)

router.get('/', (req, res) => {
  burger.get(burgers => {
    console.log(burgers)
    res.render(getPath('index'), {burger_data: burgers})
  })
})

router.get('/add', (req, res) => {
  res.send('add burger')
})

router.get('/eat', (req, res) => {
  res.send('eat a burger')
})

module.exports = router