const { createLogger, transports, format } = require('winston');
const path = require('path');

// Définir le format des logs
const logFormat = format.printf(({ timestamp, level, message }) => {
    return timestamp + ' [' + level.toUpperCase() + ']: ' + message;
});

// Créer le logger
const logger = createLogger({
    format: format.combine(
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        new transports.File({ filename: path.join(__dirname, 'application.log'), level: 'info' }),
        new transports.Console()
    ]
});

module.exports = logger;