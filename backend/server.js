// Harmadik féltől származó modulok (third-party modules) - npm. Telepíteni kell őket.
const express = require('express');

// Common Core modulok. CommonJS tartja karban őket. Nem kell őket telepíteni.
const path = require('path');

// Az alkalmazás szerverének konfigurációjának beállítása.
const app = express();
const PORT = 3000;

// Route-okhoz tartozó statikus mappák létrehozása.
app.use('/', express.static(path.join(__dirname, 'public')));

// Route-ok meghívása a routes-mappából.
// root-route
app.use('/', require('./routes/rootRoutes'));

// Nem létező route-ok kezelése.
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
});

// Az alkalmazás szerverének futtatása.
app.listen(PORT, () => {
    console.log(`A szerver fut: http://localhost:${PORT}`);
});
