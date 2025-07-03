// Simple startup script
console.log("Starting Discord Bot Application...");

// Run the main application
require('./app.js');

// Keep the process alive
process.on('SIGINT', () => {
    console.log('\nBot is shutting down...');
    process.exit(0);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});