const Task = require('../../../models/Task')

function getAllPending(req,res) {

  Task.find({completed: false})
    .then( tasks => {
      res.json(tasks)
    })

}

module.exports = getAllPending
