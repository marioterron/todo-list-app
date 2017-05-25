const Task = require('../../../models/Task')
const moment = require('moment')

function updateTask (req,res) {

	const { id } = req.params
	const { completed, title } = req.body

	const updateData = {}

	if (completed) updateData.completed = completed
	if (title) updateData.title = title
	if (completed || title) updateData.modifiedAt = moment().valueOf()

  Task.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.status(200).json(msg)
    })
    .catch( err => {
      res.status(500).json(err)
    })
}

module.exports = updateTask
