const Tour = require('../models/Tour');

exports.getToursService = async () => {
  const tours = await Tour.find({});
  return tours;
};

exports.createTourService = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};
