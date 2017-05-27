// Mongo config
const express = require('express');
const pug = require('pug');
const path = require('path');

const apiKeyMiddleware = require('./routes/middlewares/apiKey');
const bodyParserMiddleware = require('./routes/middlewares/bodyParser');
const routerTasks = require('./routes/tasks');
const routerTask = require('./routes/task');

const app = express();

// App config
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.locals.pretty = true;
app.locals.moment = require('moment');

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParserMiddleware);
app.use('/tasks', routerTasks);
app.use('/task', routerTask);

app.get('/', (req, res) => res.redirect('/tasks'))

module.exports = app
