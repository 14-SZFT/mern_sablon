// Harmadik féltől származó modulok (third-party modules) - npm. Telepíteni kell őket.
const express = require('express');

// Common Core modulok. CommonJS tartja karban őket. Nem kell őket telepíteni.
const path = require('path');

// Egy helyettesítő objektum létrehozása a route-nak.
const router = express.Router();

router.get('^/$|index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Az objektum kiexportálása, hogy máshol is használni lehessen.
module.exports = router;
