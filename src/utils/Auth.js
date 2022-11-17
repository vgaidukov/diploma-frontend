import { URL_MAIN } from "../constants/constants"

export const register = (password, email, name) => {
	return fetch(`${URL_MAIN}/signup`, {
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
	return fetch(`${URL_MAIN}/signin`, {
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
	return fetch(`${URL_MAIN}/users/me`, {
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

