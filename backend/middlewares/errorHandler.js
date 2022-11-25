// Saját (common) modul. Hivatkozás: './eleresi_ut/fileNev' formában. Esetleg dekonstrukció { ... }.
const { logEvents } = require('./logger');

// Saját (common) middleware.
const errorHandler = (err, req, res, next) => {
    logEvents(
        `${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}\n`,
        'errLog.log'
    );
    console.log(err.stack);

    const status = res.statusCode ? res.statusCode : 500; // szerverhiba

    res.status(status);

    res.json({ message: err.message });

    next();
};

module.exports = errorHandler;
