
import express from 'express';
//el enrutador principal va a llamar a TODOS los recursos y los va a enrutar
import userRouter from './users.js'
import cityRouter from './cities.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//obligo al enrutador principal a usar las rutas del enrutador del recurso user
router.use('/users',userRouter)
router.use('/cities',cityRouter)
//router.use acepta COMO MINIMO DOS PARAMETROS para poder enrutar correctamente
  //1- la palabrita con la que se va a enrutar
  //2-el enrutador que tengo que conectar

export default router
