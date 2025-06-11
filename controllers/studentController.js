const Student = require('../models/studentModel');

// Register new student
const registerStudent = async (req, res) => {
  try {
    const { name, email, department } = req.body;
    const student = new Student({ name, email, department });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get student by ID
const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ error: 'Student not found' });
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: 'Invalid ID' });
  }
};

module.exports = { registerStudent, getStudent };
