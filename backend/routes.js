const express = require('express')
const router = express.Router()
const { getMail, getMsg } = require('./controller')


router.post('/contacts', getMail)

router.get('/coc', getMsg)

module.exports = router