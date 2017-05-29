[![NodeJS](https://github.com/MarioTerron/logo-images/blob/master/logos/nodejs.png)](https://nodejs.org/) [![MongoDB](https://github.com/MarioTerron/logo-images/blob/master/logos/mongodb.png)](https://www.mongodb.com/) [![ExpressJS](https://github.com/MarioTerron/logo-images/blob/master/logos/expressjs.png)](http://expressjs.com///)
[![PugJS](https://github.com/MarioTerron/logo-images/blob/master/logos/pug.png)](http://www.pugjs.org/) [![ES6](https://github.com/MarioTerron/logo-images/blob/master/logos/es6.png)](http://www.ecma-international.org/ecma-262/6.0/) [![npm](https://github.com/MarioTerron/logo-images/blob/master/logos/npm.png)](https://www.npmjs.com/)

[![HTML5, CSS3 and JS](https://github.com/MarioTerron/logo-images/blob/master/logos/html5-css3-js.png)](https://www.w3.org/) [![jQuery](https://github.com/MarioTerron/logo-images/blob/master/logos/jquery.png)](http://jquery.com/)
[![Bootstrap](https://github.com/MarioTerron/logo-images/blob/master/logos/bootstrap.png)](http://getbootstrap.com/)
[![Bower](https://github.com/MarioTerron/logo-images/blob/master/logos/bower.png)](https://bower.io//)

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


# SKYTASKR!

SKYTASKR! is a simple to-do list app build with HTML, CSS, jQuery, Express.js, MongoDB and Mongoose at Skylab Coders Academy Full Stack Web Development Bootcamp.

## Installation

To first need to set some environment variables for this app

```bash
DB_URI=localhost:27017/<%YOUR_DB_NAME%>
PORT=<%YOUR_PORT%>
```

These environment variables can be set in an `.env` file located in the root of the folder

Or you can directly pass them when calling the app

```bash
DB_URI=localhost:27017/<%YOUR_DB_NAME%> PORT=3000 npm run dev
```

Note: You also need to have a mongo daemon running


## Launching the app

You can launch the app using some NPM scripts:

- `npm start` Will launch the app and will install the dependencies (npm & bower) automatically
- `npm run dev` Will launch the app w/ nodemon so it will restart itself when any file of the project is modified and saved
- `npm run dev:debug` Will launch the `npm run dev` script w/ lots of debugging info about the app

## API Endpoints

All these endpoints will start locally w/ `http://localhost:3000`

Example: `http://localhost:3000/tasks`

### GET endpoints

### [GET] `tasks`

Get list all tasks

```
curl localhost:3000/tasks
```

### [GET] `tasks/completed`

Get list all completed tasks

```
curl localhost:3000/tasks/completed
```

### [GET] `tasks`

Get list all pending tasks

```
curl localhost:3000/tasks/pending
```


### POST endpoints

### [POST] `tasks`

To add a task. It only need a title value. The rest of the values (completed, createdAt, id) will be added automatically

```
curl -X POST --data "title=Buy water" localhost:3000/tasks
```

### PUT endpoints

### [PUT] `task/id`

To update a task. It needs to receive one or more of the following values: completed, title (even if not all are being updated).

```
curl -X PUT --data "completed=true" localhost:3000/task/59255d4b9104a81def8eef5a
curl -X PUT --data "title=Buy more water" localhost:3000/task/59255d4b9104a81def8eef5a
```

### DELETE endpoints

### [DELETE] `task/id`

To remove a task. Only by passing an id the task will be removed.

```
curl -X DELETE localhost:3000/task/59255d4b9104a81def8eef5a
```
