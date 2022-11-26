// Harmadik féltől származó (third-party modules) modulok - npm. Telepíteni kell őket.
const mongoose = require('mongoose');

const connectBD = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI);
    } catch (error) {
        console.log(error.message);
    }
};

// Az objektum kiexportálása, hogy máshol is használni lehessen.
module.exports = connectBD;
