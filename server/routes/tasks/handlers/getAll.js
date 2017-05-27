const Task = require(__base + 'models/Task')

function getAll(req,res) {

  Task.find()
    .then( tasks => {
      res.json(tasks)
    })
}

module.exports = getAll
