const { Router } = require('express');
const router = Router();
const {login,  getUsers, postUsers} = require('../controllers/index.controller');

//Login
router.get('/login', login);

//Lista Usuarios
router.get('/usuarios', getUsers);
router.post('/usuarios', postUsers);


module.exports = router;