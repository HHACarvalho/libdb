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

	const contentType = req.headers.get('Content-Type') || '';
	if (contentType.includes('application/json')) {
		return await req.json();
	} else {
		const tokenCookie = req.headers.get('set-cookie');
		if (tokenCookie) {
			const token = tokenCookie.match(/token=([^;]+)/)[1];
			return token;
		}
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

function decodeToken(token) {
	// Get the payload
	const base64Url = token.split('.')[1];
	// Convert base64url to base64
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	// Decode the base64 string
	const decoded = atob(base64);
	// Parse to JSON object
	return JSON.parse(decoded);
}

module.exports = {
	getRequest,
	postRequest,
	putRequest,
	deleteRequest,
	decodeToken
};
