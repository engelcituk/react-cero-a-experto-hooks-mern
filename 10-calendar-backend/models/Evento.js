const { Schema, model } = require('mongoose'); //de mongoose requiero solo Schema y model, por lo que se obtiene con la desestructuracion 

const EventoSchema = Schema({
    title: {
        type: String,
        required: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

//esto no modifica la base de datos
EventoSchema.method('toJSON', function(){
    const { __v , _id, ...object } = this.toObject(); //extraigo version, _id y el resto del objeto
    object.id = _id; // reemplazo por lo que quiero
    return object;
})

module.exports = model('Evento', EventoSchema);

