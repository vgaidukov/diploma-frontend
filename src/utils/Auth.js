// const BASE_URL = 'https://api.movies-vg.nomoredomains.icu';
const BASE_URL = 'http://localhost:3030';
// const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (password, email, name) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ password, email, name })
	})
		.then(res => checkServerResponse(res))
		.then((data) => {
			saveToken(data);
			return data;
		})
};

export const authorize = (password, email) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ password, email })
	})
		.then(res => checkServerResponse(res))
		.then((data) => {
			saveToken(data);
			return data;
		})
};

export const validateToken = (token) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
		.then(res => checkServerResponse(res));
};

const checkServerResponse = (result) => {
	if (result.ok) {
		return result.json();
	}
	return Promise.reject(result);
}

const saveToken = (data) => {
	if (data.token) {
		localStorage.setItem('token', data.token);
	};
}

