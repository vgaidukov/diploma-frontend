import { URL_IMG_MOVIE, URL_MAIN } from "../constants/constants";

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res));
  }

  patchUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email
      })
    })
      .then(res => this._checkServerResponse(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res));
  }

  postMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: URL_IMG_MOVIE + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: URL_IMG_MOVIE + data.image.formats.thumbnail.url,
        id: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN
      })
    })
      .then(res => this._checkServerResponse(res));
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
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

const mainApi = new MainApi({
  baseUrl: URL_MAIN,
  // baseUrl: 'http://localhost:3030',
});

export default mainApi;
