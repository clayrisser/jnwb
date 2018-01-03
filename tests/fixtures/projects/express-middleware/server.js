const express = require('express')

const app = express()

app.use(require(process.env.NWB_EXPRESS_MIDDLEWARE)(express))

app.listen(3001, 'localhost', (err) => {
  if (err) {
    console.error('error starting express-middleware test server')
  }
  console.log('express-middleware test server listening at http://localhost:3001')
})
