const mongoose = require('mongoose');

// Tour schema
const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is required'],
    trim: true,
    unique: true,
    minLength: [3, 'Name must be at least 3 characters.'],
    maxLength: [100, 'Name is too large'],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price can't be negative value."],
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    default: 0,
  },
  viewCount: {
    type: Number,
    require: true,
    min: 0,
    default: 0,
  },
});

// Create Model
const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
