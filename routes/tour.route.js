const express = require('express');
const tourController = require('../controllers/tour.controller');
const router = express.Router();

router.route('/').get(tourController.getTours).post(tourController.createTour);

router.route('/trending').get(tourController.getTrendingTours);

router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTourById);

module.exports = router;
