const dotnetBootstrap = require('./dotnet.js');
const nodejsBootstrap = require('./nodejs.js');

const STARTUP_DELAY = 5;

async function bootstrap() {
	console.log('Waiting for services to finish booting up...');
	await new Promise((resolve) => setTimeout(resolve, STARTUP_DELAY * 1000));
	console.log('Starting bootstrap...');
	await dotnetBootstrap();
	await nodejsBootstrap();
	console.log('Finished bootstrap successfully.');
}

bootstrap();
