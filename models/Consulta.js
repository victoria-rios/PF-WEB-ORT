const mongoose = require('mongoose');
const { Schema } = mongoose;

const ConsultaSchema = new Schema({

    texto: String,
    created: { type: Date, default: Date.now },
    emisor: {type: mongoose.Schema.Types.ObjectId},
    receptor:{type: mongoose.Schema.Types.ObjectId}

});



module.exports = mongoose.model('Consulta', ConsultaSchema);


  