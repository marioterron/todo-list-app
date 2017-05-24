const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')
const getAllCompleted = require('./handlers/getAllCompleted')
const getAllPending = require('./handlers/getAllPending')
const addTask = require('./handlers/addTask')


router.get('/', getAll)
router.get('/completed', getAllCompleted)
router.get('/pending', getAllPending)
router.post('/', addTask)

module.exports = router
