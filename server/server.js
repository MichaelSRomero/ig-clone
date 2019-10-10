const { PORT } = require('./constants')
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const database = require('./models/database').sequelize
const { models } = require('./models/database')

console.log("\nENV: ", process.env.NODE_ENV)

/**
 * Automatically parse body content from incoming requests and place it
 * in req.body
 */
app.use(bodyParser.json(), (req, res, next) => {
  console.log('\n*********** BodyParser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);
  next();
})

app.post('/login', (req, res) => {
  console.log('\n*********** Login ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);
  res.status(200).json(req.body)
})

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')))
  app.use('/images', express.static(path.resolve(__dirname, '../build/images')))
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
  })
}

// As soon as tables are created, opens a connection to the server
database.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`\nListening on PORT ${PORT}`)
  })
})

/* ----------- PG ------------- */
// tested and database works
// database.query('SELECT NOW()', (err, res) => {
//   console.log("\nFROM POOL ----------------- ", err, res);
//   database.end()
// })