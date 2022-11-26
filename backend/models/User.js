// Harmadik féltől származó (third-party modules) modulok - npm. Telepíteni kell őket.
const mongoose = require('mongoose');
const { isEmail } = require('validator');

// A felhasználókhoz tartozó séma létrehozása.
const userSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: [true, 'Név megadása kötelező'],
        },
        email: {
            type: String,
            required: [true, 'E-mail cím megadássa kötelező!'],
            unique: true,
            validate: [isEmail, 'Érvényes e-mail cím megadássa kötelező!'],
        },
        jelszo: {
            type: String,
            required: [true, 'Érvényes jelszó megadássa kötelező!'],
        },
        szerepek: [
            {
                type: String,
                default: 'Eladó',
            },
        ],
        cim: {
            varos: {
                type: String,
            },
            utca: {
                type: String,
            },
            hazszam: {
                type: Number,
            },
            iranyitoszam: {
                type: Number,
            },
        },
        vasarlasok: [
            {
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'Buying',
            },
        ],
    },
    { timestamps: true }
);

// Az objektum kiexportálása, hogy máshol is használni lehessen.
module.exports = mongoose.model('user', userSchema);
