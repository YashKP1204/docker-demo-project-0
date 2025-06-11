const express = require('express');
const router = express.Router();
const { registerStudent, getStudent } = require('../controllers/studentController');

router.post('/', registerStudent);
router.get('/:id', getStudent);

module.exports = router;
