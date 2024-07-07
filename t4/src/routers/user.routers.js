const express = require('express');
const { getAllAlumnos, getAlumoById, addAlumno, updateAlumno, deleteAlumno} = require('../controller/user.controller');
const router = express.Router();

router.get('/alumnos', getAllAlumnos);
router.get('/alumnos/:id', getAlumoById);
router.post('alumnos', addAlumno);
router.put('/alumnos', updateAlumno);
router.delete('/alumnos', deleteAlumno);

module.exports = router;