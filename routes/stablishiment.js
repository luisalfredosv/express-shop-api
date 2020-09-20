import express from 'express';
const router = express.Router();

// Importamos modelos
import Stablishiment from "../models/stablishiment";
import Product from "../models/product";
import Addon from "../models/addon";



// Middlewares
// const { verificarAuth, verificaRol } = require("../middlewares/autenticacion");


// add stablishiment
router.post('/add', async(req, res) => {
 const body = req.body; 
   try {
    const StablishimentDB = await Stablishiment.create(body);
    res.status(200).json(StablishimentDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Get all stablishiment
router.get('/get', async(req, res) => {
  // const usuarioId = req.usuario._id
  try {
    const StablishimentDB = await Stablishiment.find();
    res.json(StablishimentDB);
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// get products by id
router.get('/buscar/:id', async(req, res) => {
  const id_stablishiment = req.params.id;
  try {
    const ProductDB = await Product.find({id_stablishiment});
    if(!ProductDB){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(ProductDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


// // Delete eliminar una nota
// router.delete('/nota/:id', verificarAuth, async(req, res) => {
//   const _id = req.params.id;
//   try {
//     const notaDb = await Nota.findByIdAndDelete({_id});
//     if(!notaDb){
//       return res.status(400).json({
//         mensaje: 'No se encontró el id indicado',
//         error
//       })
//     }
//     res.json(notaDb);  
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: 'Ocurrio un error',
//       error
//     })
//   }
// });

// // Put actualizar una nota
// router.put('/nota/:id', verificarAuth, async(req, res) => {
//   const _id = req.params.id;
//   const body = req.body;
//   try {
//     const notaDb = await Nota.findByIdAndUpdate(
//       _id,
//       body,
//       {new: true});
//     res.json(notaDb);  
//   } catch (error) {
//     return res.status(400).json({
//       mensaje: 'Ocurrio un error',
//       error
//     })
//   }
// });

// add products
router.post('/product/add', async(req, res) => {
 const body = req.body; 
   try {
    const ProductDB = await Product.create(body);
    res.status(200).json(ProductDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// details products by id
router.get('/product/buscar/:id', async(req, res) => {
  const _id = req.params.id;
  try {
    const ProductDB = await Product.find({_id});
    if(!ProductDB){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }
    res.json(ProductDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


// Agregar products
router.post('/product/addons/add', async(req, res) => {
 const body = req.body; 
   try {
    const AddonDB = await Addon.create(body);
    res.status(200).json(AddonDB); 
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});


// details products
router.get('/product/addons/:id', async(req, res) => {
  const id_product = req.params.id;
  try {
    const AddonDB = await Addon.find({id_product});
    if(!AddonDB){
      return res.status(400).json({
        mensaje: 'No se encontró el id indicado',
        error
      })
    }

    let response = [];

      let ingredientes = AddonDB.filter(index =>index.type ==1 );
      let especial = AddonDB.filter(index =>index.type ==2 );
      let extra = AddonDB.filter(index =>index.type ==3 );

    response.push({'ingredientes': ingredientes});
    response.push({'especial': especial});
    response.push({'extra': extra});

    res.json(response);  


    //res.json(AddonDB);  
  } catch (error) {
    return res.status(400).json({
      mensaje: 'Ocurrio un error',
      error
    })
  }
});

// Exportamos la configuración de express app
module.exports = router;

