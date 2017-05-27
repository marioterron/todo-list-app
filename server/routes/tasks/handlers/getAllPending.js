const Task = require(__dirname + '/../../../models/Task')

function getAllPending(req,res) {

  Task.find({completed: false})
    .then( tasks => {
      res.render('tasks', {tasks})
    })

}

module.exports = getAllPending
