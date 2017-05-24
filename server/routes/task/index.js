const express = require('express')
const router = express.Router()

const updateTask = require('./handlers/updateTask')
const removeTask = require('./handlers/removeTask')


router.put('/:id', updateTask)
router.delete('/:id', removeTask)


module.exports = router
