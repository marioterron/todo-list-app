const Task = require(__dirname + '/../../../models/Task')

function addTask(req,res) {

  const { title } = req.body
  const newTask = new Task({ title })

  newTask.save()
    .then( msg => res.status(200).redirect('/tasks') )
    .catch( err => res.status(500).json(err) )
}

module.exports = addTask
