const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    badges: [String],
    lastActivity: Date
  });

// Create model
const Progress = mongoose.model('UserProgress', progressSchema);

module.exports = Progress