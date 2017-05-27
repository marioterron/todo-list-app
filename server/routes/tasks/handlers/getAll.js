const Task = require(__base + 'models/task')

function getAll(req,res) {

  Task.find()
    .then( tasks => {
      res.json(tasks)
    })
}

module.exports = getAll
