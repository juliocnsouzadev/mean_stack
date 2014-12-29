var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean');

var obraSchema = new mongoose.Schema(
        {
            nomeObra: {
                type: String,
                require: true
            },
            tipo: {
                type: String,
                require: true
            },
            artista: {
                type: String,
                require: true
            },
            periodo: {
                type: String,
                require: true
            },
            criacao: {
                type: String
            }
        }
);

var obra = mongoose.model('obra', obraSchema);
module.exports = obra;