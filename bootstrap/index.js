const dotnetBootstrap = require('./dotnet.js');
const nodejsBootstrap = require('./nodejs.js');

async function bootstrap() {
	console.log('Starting bootstrap...');
	await dotnetBootstrap();
	await nodejsBootstrap();
	console.log('Finished bootstrap successfully.');
}

bootstrap();
