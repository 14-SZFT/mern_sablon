// Harmadik féltől származó (third-party modules) modulok - npm. Telepíteni kell őket.
const mongoose = require('mongoose');

// A felhasználókhoz tartozó séma létrehozása.
const typeSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A típusnév megadása kötelező'],
        },
    },
    { timestamps: true }
);

// Az objektum kiexportálása, hogy máshol is használni lehessen.
module.exports = mongoose.model('type', typeSchema);
