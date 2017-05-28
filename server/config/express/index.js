const express = require('express')
const path = require('path')

const bodyParserMiddleware = require(path.join(__base, 'routes/middlewares/bodyParser'));

const router = express.Router()

// static files
router.use(express.static(path.join(__base, '../client')));

// reception of data to req.body
router.use(bodyParserMiddleware);

/* DEBUG req.body */
router.use((req, res, next) => {
  require('debug')('req.body')(req.body)
  next()
})

module.exports = router
