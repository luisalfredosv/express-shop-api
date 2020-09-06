import express from 'express';
const router = express.Router();

	// Hash Contraseña
const bcrypt = require('bcrypt');
const saltRounds = 10;

// const {verificarAuth} = require('../middlewares/autenticacion.js');
const {verificarAuth, verificaRol} = require('../middlewares/autenticacion');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });




// Insert usuario
router.post('/nuevo-usuario', [verificarAuth, verificaRol], async (req, res) => {
  const body = {
    nombre: req.body.nombre,
    email: req.body.email,
    role: req.body.role
 }

  body.pass = bcrypt.hashSync(req.body.pass, saltRounds);

  try {

    const userDB = await User.create(body);

    return res.json(userDB);
    
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    });
  }

});


// PUT usuario
router.put('/usuario/:id', [verificarAuth, verificaRol], async(req, res) => {
const _ = require('underscore');

  let id = req.params.id;
  let body = _.pick(req.body, ['nombre', 'email', 'role', 'pass']);
  if(body.pass){
    body.pass = bcrypt.hashSync(req.body.pass, saltRounds);
  }

  try {
    // {new:true} nos devuelve el usuario actualizado
    const usuarioDB = await User.findByIdAndUpdate(id, body, {new: true, runValidators: true});

    return res.json(usuarioDB);

  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});


// DELETE Usuario
router.delete('/usuario/:id', [verificarAuth, verificaRol], async(req, res) => {
  let id = req.params.id;
  try {
    const usuarioDelete = await User.findByIdAndRemove(id);

    if(!usuarioDelete){
      return res.status(400).json({
        mensaje: 'Usuario no encontrado'
      })
    }

    return res.json(usuarioDelete);
    
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }

});

module.exports = router;