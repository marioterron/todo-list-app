const Task = require('../../../models/Task')
const debug = require('debug')('task')

function removeTask (req,res) {

  const { id } = req.params

  Task.findByIdAndRemove(id)
	.then( msg =>  res.status(200).json(msg) )
	.catch( err => res.status(500).json(err) )
}

module.exports = removeTask
