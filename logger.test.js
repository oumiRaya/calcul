const logger = require('../logger');
const fs = require('fs');
const path = require('path');

describe('Logger tests', () => {
  const logFilePath = path.join(__dirname, '../application.log');

  beforeEach(() => {
    if (fs.existsSync(logFilePath)) {
      fs.unlinkSync(logFilePath);
    }
  });

  test('should log info messages', () => {
    logger.info('This is an info message');
    const logContent = fs.readFileSync(logFilePath, 'utf8');
    expect(logContent).toContain('This is an info message');
  });

  test('should log warning messages', () => {
    logger.warn('This is a warning message');
    const logContent = fs.readFileSync(logFilePath, 'utf8');
    expect(logContent).toContain('This is a warning message');
  });

  test('should log error messages', () => {
    logger.error('This is an error message');
    const logContent = fs.readFileSync(logFilePath, 'utf8');
    expect(logContent).toContain('This is an error message');
  });
});