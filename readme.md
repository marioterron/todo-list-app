# API Todo List

## Actions available

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
curl -X PUT --data "name=Buy more water" localhost:3000/task/59255d4b9104a81def8eef5a

```

### DELETE endpoints

### [DELETE] `task/id`

To remove a task. Only by passing an id the task will be removed.

```
curl -X DELETE localhost:3000/task/59255d4b9104a81def8eef5a
```
