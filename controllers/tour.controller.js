const {
  createTourService,
  getToursService,
} = require('../services/tour.services');

exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Tour inserted successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Tour is not inserted',
      error: error.message,
    });
  }
};

exports.getTours = async (req, res, next) => {
  try {
    const tours = await getToursService();

    res.status(200).json({
      status: 'success',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Can't get the data",
      error: error.message,
    });
  }
};
