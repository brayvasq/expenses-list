const express = require('express')
const router = express.Router()
const testController = require('../controllers/test.controller')

router.get('/test', testController.index)

module.exports = router
