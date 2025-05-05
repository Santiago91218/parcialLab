const mongose = require("mongoose")
const Libros= new mongose.Schema({

    "titulo":{type:String, require:true},
    "resumen":{type:String, require:false},
    "genero":{type:String, require: true},
    "publicacion":{type:Date, require:true},
    "disponible":{type:Boolean, require:true}
})
module.exports = mongose.model("Libros", Libros)