const mongoose = require('mongoose');

// Define schema
const courseSchema = new mongoose.Schema({
    guildId: { type: String, required: true },
    name: { type: String, required: true },
    description: String,
    professors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    roles: {
      studentRole: String,
      taRole: String,
      professorRole: String
    },
    assignments: [{
      title: String,
      dueDate: Date,
      maxPoints: Number
    }],
    xpLevels: [{
      level: Number,
      xpRequired: Number
    }]
  }, { timestamps: true });

// Create model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course