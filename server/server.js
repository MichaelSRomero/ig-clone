const { PORT } = require('./constants')
const path = require('path');
const express = require('express');
const app = express();
// Middlewares
const cors = require('cors');
const bodyParser = require('body-parser');
// Database
const database = require('./models/database').sequelize
const { models } = require('./models/database')

// Routers //
const userRouter = require('./routes/userRouter')

console.log("\nENV: ", process.env.NODE_ENV)

/**
 * Automatically parse body content from incoming requests and place it
 * in req.body
 */
app.use(cors(), bodyParser.json(), (req, res, next) => {
  console.log('\n*********** BodyParser & CORS ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} `);
  next();
})

/**
 * Main Routes
 */
app.use('/login', userRouter)

/**
 * @description access these routes when in Production mode
 */
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')))
  app.use('/images', express.static(path.resolve(__dirname, '../build/images')))
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
  })
}

/**
 * @errorHandler
*/
app.use((err, req, res, next) => {
  const message = `\nError inside ${err.location}: ${err.error}`;
  console.log(message)
  res.status(err.status).send(err.error)
})

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