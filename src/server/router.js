const router = require('express').Router()
const fs = require('fs');

// TODO dynamically load in all route files

const pokemon = require('./routes/pokemon')

router.use('/pokemon', pokemon)

//catch any api requests that fail to match to an api route
router.use('*', (req, res, next) => {
  res.status(500).send({
    statusCode: 500,
    message: 'Api endpoint not found'
  })
})

module.exports = router;