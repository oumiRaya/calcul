const logger = require('./logger');

// Exemple de messages de log
logger.info('This is an info message');
logger.warn('This is a warning message');
logger.error('This is an error message');

// Simuler une application qui fait quelque chose
function main() {
    logger.info('Application started');
    
    // Votre code applicatif ici
    // ...

    logger.info('Application finished');
}

main();