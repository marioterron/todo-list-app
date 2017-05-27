const express = require('express')
const router = express.Router()

const getAllCompleted = require('./handlers/getAllCompleted')
const getAllPending = require('./handlers/getAllPending')
const addTask = require('./handlers/addTask')


router.get('/', getAllPending)
router.get('/completed', getAllCompleted)
router.post('/', addTask)

module.exports = router
