const { updateTourService } = require('../controllers/tour.controller');
const Tour = require('../models/Tour');

exports.getToursService = async (filters, queries) => {
  const tours = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const totalTours = await Tour.countDocuments(filters);
  const pageCount = Math.ceil(totalTours / queries.limit);

  return { totalTours, pageCount, tours };
};

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourByIdService = async (id) => {
  await Tour.updateOne({ _id: id }, { $inc: { viewCount: 1 } });
  const tour = await Tour.findById(id);
  return tour;
};

exports.updateTourService = async (id, data) => {
  const response = await Tour.updateOne(
    { _id: id },
    { $set: data },
    { runValidators: true }
  );
  return response;
};

exports.deleteTourByIdService = async (id) => {
  const result = await Tour.deleteOne({ _id: id });
  return result;
};

exports.getTrendingToursService = async () => {
  const tours = await Tour.find({}).sort({ viewCount: -1 }).limit(3);
  return tours;
};

exports.getCheapestToursService = async () => {
  const tours = await Tour.find({}).sort('price').limit(3);
  return tours;
};
