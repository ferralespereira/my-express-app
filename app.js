// const express = require('express');
// const { Client } = require('pg');
// const app = express();
// const port = process.env.PORT || 3000;

// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// client.connect();

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.get('/questions', async (req, res) => {
//   try {
//     const result = await client.query('SELECT * FROM questions');
//     res.json(result.rows);
//   } catch (err) {
//     res.status(500).send('Error retrieving questions');
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
//*----------------------db
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '2013',
  port: 5432, // Default PostgreSQL port
});

//Test the connection
pool.connect()
.then(() => {
    console.log('Connected to PostgreSQL database');
})
.catch((err) => {
    console.error('Error connecting to PostgreSQL database:', err);
});

module.exports = pool;


//*---------------



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})