const express = require('express');
const router = express.Router();

//All Routes
const { 
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');

router.post('/', createCourse);
router.get('/:id', getCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;
