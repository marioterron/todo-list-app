const Task = require('../../../models/task')

function updateTask (req,res) {

	const { id } = req.params
	const { completed, title } = req.body

	const updateData = {}

	if (completed) updateData.completed = completed
	if (title) updateData.title = title
	if (completed || title) updateData.modifiedAt = +new Date()

  Task.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })
}

module.exports = updateTask
