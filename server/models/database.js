const { Pool } = require('pg');
const pool = new Pool({
  user: 'student',
  host: 'localhost',
  database: 'igclone',
  password: 'ilovetesting'
});

// pool emits an error on behalf idle clients
pool.on('error', (err, client) => {
  console.error('\nUnexpected error on idle client', err)
  process.exit(-1)
})
// pool.query('SELECT NOW()', (err, res) => {
//   console.log("\nFROM POOL ----------------- ", err, res);
//   pool.end()
// })
module.exports = pool;