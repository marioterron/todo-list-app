const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()

router
	.use(bodyParser.urlencoded({
		extended: false
	}))
	.use(bodyParser.json())

module.exports = router
