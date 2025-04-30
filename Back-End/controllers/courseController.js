const Course = require('../models/Course');
const User = require('../models/User');

//Controller For Creating Courses, Reqs guidId, name, and description
exports.createCourse = async (req, res) => {
  try {
    const { guildId, name, description } = req.body;
    const newCourse = await Course.create({ guildId, name, description });
    res.status(201).json(newCourse);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Controller For fetching Cours, Reqs Id
exports.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate('professors students');
    res.json(course);
  } catch (error) {
    res.status(404).json({ error: 'Course not found' });
  }
};
