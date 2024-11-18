const mongoose = require('mongoose');

const calcUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const calcUser = mongoose.model('CalculatorUser', calcUserSchema);

module.exports = calcUser;