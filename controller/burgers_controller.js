const express = require('express')
const burger = require('../models/burger')

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/add', (req, res) => {
  res.send('add burger')
})

router.get('/eat', (req, res) => {
  res.send('eat a burger')
})

module.exports = router