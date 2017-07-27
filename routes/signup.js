var express = require('express')
var router = express.Router()

router.get('/', (req, res, next) => {
  res.end(req.flash())
})

router.post('/', (req, res, next) => {
  res.end(req.flash())
})

module.exports = router