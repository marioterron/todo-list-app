const Task = require(__base + 'models/task')

function getAllPending(req,res) {

  Task.find({completed: false})
    .then( tasks => {
      res.render('tasks', {tasks})
    })

}

module.exports = getAllPending
