// Harmadik féltől származó (third-party modules) modulok - npm. Telepíteni kell őket.
require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Common Core modulok. CommonJS tartja karban őket. Nem kell őket telepíteni.
const path = require('path');

// Saját (common) modulok. Hivatkozás: './eleresi_ut/fileNev' formában. Esetleg dekonstrukció { ... }.
const { logger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const corsOptions = require('./config/corsOptions');

// Az alkalmazás szerverének konfigurációjának beállítása.
const app = express();
const PORT = process.env.PORT || 3500;

// Middleware-k használata
// Saját (custom)
app.use(logger);

// Harmadik féltől származó (third-party) middleware-k
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

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

// Middleware-k használata
// Saját (custom)
app.use(errorHandler);

// Az alkalmazás szerverének futtatása.
app.listen(PORT, () => {
    console.log(`A szerver fut: http://localhost:${PORT}`);
});
