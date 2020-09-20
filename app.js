import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // Rutas
/*app.get('/', (req, res) => {
  res.send('Hola bienvenido a mi primera API');
});*/

app.use('/api', require('./routes/login'));

//app.use('/api', require('./routes/nota'));

app.use('/stablishiment', require('./routes/stablishiment'));


//app.use('/force', require('./routes/force'));


// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

// Configuracion del servidor
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
  console.log('Server Express on port: '+ app.get('puerto'));
});

// Conexión base de datos
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/myapp';
const options = {
	//auth: { "authSource": "admin" },
    //user: "root",
    //pass: "12795lasv",
	useNewUrlParser: true, 
	useCreateIndex: true,
	useUnifiedTopology: true
};

// // Or using promises
mongoose.connect(uri, options).then(
  /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
  () => { console.log('Conexion correcta con MongoDB') },
  /** handle initial connection error */
  err => { console.log(err) }
);
// 
	
