const { Router } = require('express');
const router = Router();
const usersCtrl = require("../controller/user.controller")


router.get('/media/:id', usersCtrl.getMedia); 
router.get('/apuntadas', usersCtrl.getAllApuntadas); 
router.get('/apuntadas/:id', usersCtrl.getApuntadasById); 
router.get('/impartidas', usersCtrl.getAllImpartidas);
router.get('/impartidas/:id', usersCtrl.getImpartidasById); 

module.exports = router;