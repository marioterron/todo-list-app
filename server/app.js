const express = require('express')
const path = require('path')
const pug = require('pug')

const apiKeyMiddleware = require('./routes/middlewares/apiKey');
const bodyParserMiddleware = require('./routes/middlewares/bodyParser');
const routerTasks = require('./routes/tasks')
const routerTask = require('./routes/task')

const app = express()

/* DEBUG init */
app.use((req, res, next) => {
  require('debug')(`new request to [${req.method}] ${req.path}`)('-'.repeat(40))
  next()
})

app.locals.pretty = true;
app.locals.moment = require('moment');

app.set('view engine', 'pug');
app.set('views', path.join(__base, 'views'));

app.use(express.static(path.join(__base, '../client')));
app.use(bodyParserMiddleware);
app.use('/tasks', routerTasks);
app.use('/task', routerTask);

app.get('/', (req, res) => res.redirect('/tasks'))

module.exports = app
