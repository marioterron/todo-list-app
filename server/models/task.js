const mongoose = require('mongoose')
const moment = require('moment')

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
		default: moment().valueOf()
	},
	modifiedAt: {
		type: Number,
		default: moment().valueOf()
	}
}, { collection } )

module.exports = mongoose.model('Task', taskSchema)
