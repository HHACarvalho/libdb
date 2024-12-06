async function getRequest(url) {
	const req = await fetch(url);
	if (!req.ok) {
		const data = await req.json();
		throw new Error('Failed to get: ' + url + ' | ' + data.error);
	}
}

async function postRequest(url, body) {
	const req = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!req.ok) {
		const data = await req.json();
		throw new Error('Failed to post: ' + url + ' | ' + data.error);
	}
}

async function putRequest(url, body) {
	const req = await fetch(url, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	});
	if (!req.ok) {
		const data = await req.json();
		throw new Error('Failed to put: ' + url + ' | ' + data.error);
	}
}

async function deleteRequest(url) {
	const req = await fetch(url, { method: 'DELETE' });
	if (!req.ok) {
		const data = await req.json();
		throw new Error('Failed to delete: ' + url + ' | ' + data.error);
	}
}

module.exports = {
	getRequest,
	postRequest,
	putRequest,
	deleteRequest
};
