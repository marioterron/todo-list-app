const Task = require('../../../models/task')

function getAllPending(req,res) {

  Task.find({completed: false})
    .then( tasks => {
      res.json(tasks)
    })

}

module.exports = getAllPending
