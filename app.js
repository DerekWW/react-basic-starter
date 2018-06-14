require('dotenv').config()
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const PORT = process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/dist')));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

//Serve our react app when the user goes to any url that does route to the proxy at /api
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

//error handler
app.use(function (err, req, res, next) {
  let { err, statusCode, message } = err;
  console.error(err)
  res.status(statusCode).send(message)
})

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})
