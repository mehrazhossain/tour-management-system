const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(express.json());
app.use(cors());

// routers
const tourRoute = require('./routes/tour.route');

app.get('/', (req, res) => {
  res.send('API is running..');
});

// get/post api endpoint
app.use('/api/v1/tour', tourRoute);

module.exports = app;
