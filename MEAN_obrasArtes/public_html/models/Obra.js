var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean');

var obraSchema = new mongoose.Schema(
        {
//            nomeObra: {
//                type: String,
//                require: false
//            },
//            tipo: {
//                type: String,
//                require: false
//            },
//            artista: {
//                type: String,
//                require: true
//            },
//            periodo: {
//                type: String,
//                require: false
//            },
//            criacao: {
//                type: String
//            }
        }
);

var Obra = mongoose.model('obra', obraSchema);
module.exports = Obra;