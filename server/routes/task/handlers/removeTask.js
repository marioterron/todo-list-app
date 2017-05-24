const Task = require('../../../models/task')

function removeTask (req,res) {

  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })
}

module.exports = removeTask
