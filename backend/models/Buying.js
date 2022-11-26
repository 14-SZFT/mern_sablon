// Harmadik féltől származó (third-party modules) modulok - npm. Telepíteni kell őket.
const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

// A felhasználókhoz tartozó séma létrehozása.
const buyingSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'A terméknév megadása kötelező'],
        },
        termekek: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Good',
            },
        ],
        vasarlo: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
);

buyingSchema.plugin(AutoIncrement, {
    inc_field: 'vasarlas',
    id: 'vasarlasSzamok',
    start_sec: 100,
});

// Az objektum kiexportálása, hogy máshol is használni lehessen.
module.exports = mongoose.model('buying', buyingSchema);
