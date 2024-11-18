const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  purchaseLink: { type: String, required: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String, required: true },
}, { timestamps: true });

courseSchema.index({ title: 1 });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
