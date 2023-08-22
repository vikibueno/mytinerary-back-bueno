//IMPORT
import 'dotenv/config.js'                       //importo UNICAMENTE las variables de entorno
import __dirname from './utils.js';             //importo la configuracion de la ubicacion del servidor(antes, con commonjs, venia pre-configurado)
// var createError = require('http-errors');
import createError from 'http-errors';          //crear errores
// var express = require('express');
import express from 'express';                  //provee metodos y propiedades para levantar servdores
// var path = require('path');
import path from 'path';                        //para conocer la ubicacion de nuestro servidor
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
import logger from 'morgan'                     //para registrar cada una de las peticiones

//var indexRouter = require('./routes/index');  //solo vamos a configurar las rutas del enrutador de back principial
import indexRouter from './routes/index.js'     //este enrutador va a llamar a TODOS los otros recursos(cities,itineraries)

import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';

let app = express();                            //ejecutando el modulo de express:CREO UNA APP DE BACKEND(SERVIDOR)

//VIEW ENGINE SETUP
//SET es el método necesario para setear (configurar) algo (mototr de plantillas de vistas de EJS)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MIDDLEWARES (funciones)
//USE método necesario para obligar a mi aplicación a que use la función CADA VEZ que se realiza una SOLICITUD/PETICION  
app.use(logger('dev'));                                   //obligo al servidor a registrar una petición con el módulo de logger
app.use(express.json());                                  //obligo al servidor a manipular/leer json
app.use(express.urlencoded({ extended: false }));         //obligo al servidor a leer params/queries
//app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //obligo al servidor a acceder los archivos estáticos de la carpeta public

//ROUTER
app.use('/api', indexRouter);        //obligo al servidor a que se las rutas del erutador principal con "/api"

// catch 404 and forward to error handler
//manejo de endpoints que no existan
app.use(notFoundHandler);

//error handler (manejadora de errores)
//esta funcion sirve para no repetir codigo y que cada vez que salte el catch salte esta funcion
app.use(errorHandler);

export default app