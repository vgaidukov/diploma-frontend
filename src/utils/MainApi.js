class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getInitialUserInfo() {
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
        about: data.about
      })
    })
      .then(res => this._checkServerResponse(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUyZmVhMTQxMzg2Njk5ZTEyMTBlMmEiLCJpYXQiOjE2NjgwOTY3OTIsImV4cCI6MTY2ODcwMTU5Mn0.2PDnHXzFFn9rmVv1tbSB4k6d-QurCzzx-zAvmJUL-Vc`,
        'Content-Type': 'application/json'
      }
    })
      .then(res => this._checkServerResponse(res));
  }

  postMovie(data) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        // authorization: `Bearer ${localStorage.getItem('token')}`,
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUyZmVhMTQxMzg2Njk5ZTEyMTBlMmEiLCJpYXQiOjE2NjgwOTY3OTIsImV4cCI6MTY2ODcwMTU5Mn0.2PDnHXzFFn9rmVv1tbSB4k6d-QurCzzx-zAvmJUL-Vc`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: "https://api.nomoreparties.co" + data.image.url,
        trailerLink: data.trailerLink,
        thumbnail: "https://api.nomoreparties.co" + data.image.formats.thumbnail.url,
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
        authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzUyZmVhMTQxMzg2Njk5ZTEyMTBlMmEiLCJpYXQiOjE2NjgwOTY3OTIsImV4cCI6MTY2ODcwMTU5Mn0.2PDnHXzFFn9rmVv1tbSB4k6d-QurCzzx-zAvmJUL-Vc`,
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

const mainApi = new MainApi({
  baseUrl: 'https://api.movies-vg.nomoredomains.icu',
});

export default mainApi;
