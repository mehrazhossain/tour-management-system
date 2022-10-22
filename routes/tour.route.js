const express = require('express');
const tourController = require('../controllers/tour.controller');
const router = express.Router();

router.route('/').post(tourController.createTour);

module.exports = router;
