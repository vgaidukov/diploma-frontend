class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getAllMovies() {
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

const moviesApi = new MoviesApi({
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
});

export default moviesApi;
