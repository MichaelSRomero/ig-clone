const path = require('path');
const express = require('express');
const app = express();
const { PORT } = require('./constants')

console.log("\nENV: ", process.env.NODE_ENV)

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')))
  app.use('/images', express.static(path.resolve(__dirname, '../build/images')))
  app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../build/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`\nListening on PORT ${PORT}`)
})