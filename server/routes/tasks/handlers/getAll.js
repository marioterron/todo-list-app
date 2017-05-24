const Task = require('../../../models/task')

function getAll(req,res) {

  Task.find()
    .then( tasks => {
      res.json(tasks)
    })

}

module.exports = getAll
