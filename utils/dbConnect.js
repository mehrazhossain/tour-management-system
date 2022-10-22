const mongoose = require('mongoose');

const connectDB = mongoose
  .connect(process.env.DATABASE_LOCAL)
  .then(() => {
    console.log(`Database connected successfully`.green.bold);
  })
  .catch((err) => {
    console.log(`Not Connected to Database ERROR! `.red.bold, err);
  });

module.exports = connectDB;
