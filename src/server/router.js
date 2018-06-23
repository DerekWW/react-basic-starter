const router = require('express').Router()
const fs = require('fs')

/*
dynamically load in all the routers in the routes file
*/
var routePath = '/routes'
fs.readdirSync(__dirname + routePath).forEach(file => {
  let route = `.${routePath}/${file}`
  router.use(require(route))
});

//catch any api requests that fail to match to an api route
router.use('*', (req, res, next) => {
  res.status(500).send({
    statusCode: 500,
    message: 'Api endpoint not found'
  })
})

module.exports = router