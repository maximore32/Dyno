var mongoose = require('mongoose');  
var DinoSchema  = new mongoose.Schema({  
  ID: String,
  Dino: String,
  Periodo: String,
  Categoria: String,
  Altitud: String,
  Longitud: String,
  Descripcion: String,
  Imagen: String
});
mongoose.model('dinosaurios', DinoSchema);
// Exportamos como módulo
module.exports = mongoose.model('dinosaurios');