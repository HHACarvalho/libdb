const { postRequest, putRequest, decodeToken } = require('./utils.js');

module.exports = nodejsBootstrap;

async function nodejsBootstrap() {
	if (!process.env.NODEJS_URI) {
		throw new Error('Environment variable DOTNET_URI is required');
	}

	console.log('Connecting to: ' + process.env.NODEJS_URI);

	///////////
	// Roles //
	///////////

	const role1 = {
		name: 'User',
		permissions: []
	};
	const role2 = {
		name: 'Mod',
		permissions: ['manageRoles']
	};
	const role3 = {
		name: 'Admin',
		permissions: ['manageRoles', 'manageUsers']
	};

	await postRequest(process.env.NODEJS_URI + 'role', role1);
	const resRole2 = await postRequest(process.env.NODEJS_URI + 'role', role2);
	const resRole3 = await postRequest(process.env.NODEJS_URI + 'role', role3);

	///////////
	// Users //
	///////////

	const user1 = {
		email: 'hugo.carvalho@mail.com',
		password: '12345678',
		firstName: 'Hugo',
		lastName: 'Carvalho'
	};
	const user2 = {
		email: 'afonso.esteves@mail.com',
		password: '12345678',
		firstName: 'Afonso',
		lastName: 'Esteves'
	};
	const user3 = {
		email: 'erica.lopes@mail.com',
		password: '12345678',
		firstName: 'Érica',
		lastName: 'Lopes'
	};
	const user4 = {
		email: 'hugo.pereira@mail.com',
		password: '12345678',
		firstName: 'Hugo',
		lastName: 'Pereira'
	};
	const user5 = {
		email: 'diogo.santos@mail.com',
		password: '12345678',
		firstName: 'Diogo',
		lastName: 'Santos'
	};

	const resUser1 = await postRequest(process.env.NODEJS_URI + 'user/signup', user1);
	const tokenUser1 = decodeToken(resUser1);
	await putRequest(process.env.NODEJS_URI + 'user/role?userId=' + tokenUser1.id + '&roleId=' + resRole3.id);
	const resUser2 = await postRequest(process.env.NODEJS_URI + 'user/signup', user2);
	const tokenUser2 = decodeToken(resUser2);
	await putRequest(process.env.NODEJS_URI + 'user/role?userId=' + tokenUser2.id + '&roleId=' + resRole2.id);
	await postRequest(process.env.NODEJS_URI + 'user/signup', user3);
	await postRequest(process.env.NODEJS_URI + 'user/signup', user4);
	await postRequest(process.env.NODEJS_URI + 'user/signup', user5);

	console.log('Successfully finished Node.js bootstrap');
}
