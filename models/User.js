import { model,Schema} from 'mongoose'

//lo primero que necesitamos crear es el espacio virtual donde se van a guardar los documentos/modelos
//es decir LA COLECCION (conjunto de documentos/modelos de datos)

let collection = 'users'

//lo siguiente es definir el esquema de datos del modelo
//es decir EL MOLDE / LA FORMA que tiene que tener mi modelo de datos
let schema = new Schema({
    name: { type:String,required:true },     //por default TODOS los datos son opcionales (required:false)
    lastName: { type:String },                //si es opcional NO NECESITO agregar el required        
    mail: { type:String,required:true,unique:true},  //unique:true comprueba que el mail SEA UNICO (no hay mails duplicados)
    photo: { type:String },
    password: { type:String,required:true },
    country: { type:String,required:true }
})

//para crear  un modelo de datos utilizoel metodo model
//pasando como parametro DONDE tengo que crear los documentos y con que FORMA
let User = model(collection,schema)

export default User