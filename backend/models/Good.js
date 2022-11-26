// Harmadik féltől származó (third-party modules) modulok - npm. Telepíteni kell őket.
const mongoose = require('mongoose');

// A felhasználókhoz tartozó séma létrehozása.
const goodSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A terméknév megadása kötelező'],
        },
        tipus: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Type',
            required: true,
        },
    },
    { timestamps: true }
);

// Az objektum kiexportálása, hogy máshol is használni lehessen.
module.exports = mongoose.model('good', goodSchema);
