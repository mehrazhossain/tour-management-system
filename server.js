const dotenv = require('dotenv').config();
const colors = require('colors');
const connectDB = require('./utils/dbConnect');

const app = require('./app');

// database connection
connectDB;

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.green.bold);
});
