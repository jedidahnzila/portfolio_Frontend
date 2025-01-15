const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept'],
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.options('/api/contact', cors());

// Create MySQL connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

  
// eslint-disable-next-line no-undef
app.listen(env.PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`Server is running on port ${env.PORT}`);
});

// Convert pool to use promises
const promisePool = pool.promise();

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Successfully connected to database');
  connection.release();
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  console.log('Received contact form submission:', req.body);
  
  try {
    const { name, email, message } = req.body;
    
    // Validate the input
    if (!name || !email || !message) {
      console.log('Validation failed:', { name, email, message });
      return res.status(400).json({ message: 'All fields are required' });
    }
    
    console.log('Attempting database insertion...');
    
    // Insert data into database
    const [result] = await promisePool.execute(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    
    console.log('Database response:', result);
    
    if (result.affectedRows) {
      return res.status(200).json({ message: 'Message sent successfully' });
    } else {
      throw new Error('Failed to save message');
    }
  } catch (error) {
    console.error('Detailed contact form error:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage,
      stack: error.stack
    });
    return res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running correctly' });
});