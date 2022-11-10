class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getMoviesArray() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res));
  }

  _checkServerResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(result.status);
  }
}

const api = new Api({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default api;
