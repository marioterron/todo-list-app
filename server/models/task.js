const mongoose = require('mongoose')

const collection = "tasks"

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	createdAt: {
		type: Number,
		default: +new Date()
	}
}, { collection } )

module.exports = mongoose.model('Task', taskSchema)
