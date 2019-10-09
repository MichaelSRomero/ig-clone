const path = require('path');
const express = require('express');
const app = express();
const { PORT } = require('./constants')

app.listen(PORT, () => {
  console.log(`\nListening on PORT ${PORT}`)
})