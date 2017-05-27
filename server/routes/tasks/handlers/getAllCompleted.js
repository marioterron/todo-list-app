const Task = require('../../../models/Task')

function getAllCompleted(req,res) {

  Task.find({completed: true})
    .then( tasks => {
      res.render('tasksCompleted', {tasks})
    })
}

module.exports = getAllCompleted
