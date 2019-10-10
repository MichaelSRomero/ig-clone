const Sequelize = require('sequelize');
const sequelize = new Sequelize('igclone', 'mykethetitan', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});
// Models
const models = {
  User: sequelize.import('./User')
}

sequelize.authenticate()
  .then(() => {
    console.log('\nConnection has been establish successfully.')
  })
  .catch(err => {
    console.error('\nUnable to connect to the database:', err)
  })

  module.exports = {sequelize, models};
  /* -------------- PG ------------------ */
  // const { Pool } = require('pg');
  // const pool = new Pool({
  //   user: 'student',
  //   host: 'localhost',
  //   database: 'igclone',
  //   password: 'ilovetesting'
  // });
  
  // pool emits an error on behalf idle clients
  // pool.on('error', (err, client) => {
  //   console.error('\nUnexpected error on idle client', err)
  //   process.exit(-1)
  // })
  // pool.query('SELECT  NOW()', (err, res) => {
  //   console.log("\nFROM POOL ----------------- ", err, res);
  //   pool.end()
  // })