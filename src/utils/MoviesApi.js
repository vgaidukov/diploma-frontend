import { URL_MOVIE } from "../constants/constants"

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getAllMovies() {
    return fetch(`${this._baseUrl}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res));
  }

  _checkServerResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(result);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: URL_MOVIE,
});

export default moviesApi;
