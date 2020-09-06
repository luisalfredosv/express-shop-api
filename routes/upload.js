import express from 'express';
const router = express.Router();

const fileUpload = require('express-fileupload')



const app = express()


  // Hash Contraseña
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// const {verificarAuth} = require('../middlewares/autenticacion.js');
// const {verificarAuth, verificaRol} = require('../middlewares/autenticacion');


// Upload files 

// router.post('/upload', [verificarAuth, verificaRol], async (req, res) => {
router.post('/upload/subir',(req,res) => {
    let File = req.files.file
    File.mv(`../upload/${File.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'File upload' })
    })
});



app.use(fileUpload())


module.exports = router;