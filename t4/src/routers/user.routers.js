const {Router} = require('express');
const router = Router();
const usersCtrl = require("../controller/user.controller")

router.get('/alumnos', usersCtrl.getAllAlumnos);
router.get('/alumnos/:id', usersCtrl.getAlumnoById);
router.post('alumnos', usersCtrl.addAlumno);
router.put('/alumnos', usersCtrl.updateAlumno);
router.delete('/alumnos', usersCtrl.deleteAlumno);

module.exports = router;