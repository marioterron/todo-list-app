// Mongo config
const express = require('express')
const mongoose = require('mongoose')

const bodyParserMiddleware = require('./routes/middlewares/bodyParser')
const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')


const dbUrl = 'mongodb://localhost:27017/test'
const PORT = 3000

const app = express()

// Mongoose config
mongoose.Promise = Promise
mongoose.connect(dbUrl)

// App config
app.use(bodyParserMiddleware)
app.use('/tasks', routerTasks)
app.use('/task', routerTask)

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))
