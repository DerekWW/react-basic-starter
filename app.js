require('dotenv').config()
const express = require('express')
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan = require('morgan')
const PORT = process.env.PORT
const app = express()
const api = require('./src/server/router')

app.use(bodyParser.json())
app.use(cookieParser())

app.use(express.static(path.join(__dirname, '/dist')));

if (app.get('env') === 'production') {
  app.use(morgan('combined'));
} else {
  app.use(morgan('dev'));
}

//expose all other server routes behind /api
app.use('/api', api)

//Serve our react app when the user goes to any url that does not route to the proxy routes at /api
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})

//error handler
app.use(function (err, req, res, next) {
  console.error(err)
  res.send(err)
})


app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
})
