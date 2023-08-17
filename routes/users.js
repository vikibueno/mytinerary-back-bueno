import express, { Router, response } from 'express';
import create from '../controllers/users/create.js';
import read from '../controllers/users/read.js'
import readOne from '../controllers/users/readOne.js';
import update from '../controllers/users/update.js';
import destroy from '../controllers/users/destroy.js';
let router = express.Router();

//router.metodo('/',function)
//metodo http que: para crear es un POST, para leer es un GET, para actualizar es PUT/PATCH y para eliminar DELETE
//funcion que se va a ejecutar UNA UNICA VEZ cada vez que se llame al endpoint de manera que
//cada vez que realizo una peticion POST, se creará un recurso
//cada vez que realizo una peticion GET, se leeran recursos
//cada vez que realizo una peticion PUT/PATCH, se actualizara un recurso
//cada vez que realizo una peticion DELETE, se eliminara un recurso

//CREATE
  //req es el objeto donde el cliente me manda MUCHOS DATOS importantes acerca de la peticion
  //las propiedades de req MAS IMPORTANTES SON:
  //BODY: objeto que generalmente se envia a traves de formularios
  //PARAMS (parametros).: suelen ser estatico como el id de una ciudad a buscar por ejemplo
  //QUERIES (consultas): son opcionales y nos indican algunas consultas/filtros/modos de ver la info de pagina, etc
  router.post('/', create)

  //READ
  router.get('/', read)

  //READ ONE
  router.get('/:id', readOne)
  //el nombre del parametro puede ser cualquiere pero tanto aca como en el controlador
  //debo llamarlo de la misma manera
  //ejemple: aca y en controller: id

  //UPDATED
  router.put('/:u_id', update)

  //DESSTROY
  router.delete('/:id', destroy)

export default router
