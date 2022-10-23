const {
  createTourService,
  getToursService,
  getTourByIdService,
  updateTourService,
  deleteTourByIdService,
  getTrendingToursService,
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
    let filters = { ...req.query };

    // exclude
    const excludeFields = ['sort', 'page', 'limit'];
    excludeFields.forEach((field) => delete filters[field]);

    const queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      queries.fields = fields;
      console.log(fields);
    }

    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const tours = await getToursService(filters, queries);

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

exports.getTourById = async (req, res, next) => {
  try {
    const tour = await getTourByIdService(req.params.id);

    res.status(200).json({
      status: 'success',
      message: 'Successfully got the data',
      data: tour,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Couldn't get the data",
      error: error.message,
    });
  }
};

exports.updateTour = async (req, res, next) => {
  try {
    const response = await updateTourService(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      message: 'Data updated successfully',
      data: response,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: 'Data update failed',
      error: error.message,
    });
  }
};

exports.deleteTourById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await deleteTourByIdService(id);

    if (!result.deletedCount) {
      return res.status(400).json({
        status: 'fail',
        error: "Couldn't delete the tour",
      });
    }

    res.status(200).json({
      status: 'success',
      message: 'Successfully deleted the tour',
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Couldn't delete the tour",
      error: error.message,
    });
  }
};

exports.getTrendingTours = async (req, res, next) => {
  try {
    const tours = await getTrendingToursService();

    res.status(200).json({
      status: 'success',
      message: 'Successfully got the trending data',
      data: tours,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: "Couldn't get the trending data",
      error: error.message,
    });
  }
};
