export class Api { 
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _errorHandler = (res) => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject('Произошла ошибка');
  }

  getAllCards () {
    return fetch (this._url + 'cards', {
      method: 'GET',
      headers: this._headers
    }).then(this._errorHandler);
  }

  addCards (data) { 
    return fetch (this._url + 'cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
          name: data.name,
          link: data.link,
          likes: data.likes
      })
    }).then(this._errorHandler);
  }

  getUser () { 
    return fetch (this._url + 'users/me', {
      method: 'GET',
      headers: this._headers
    }).then(this._errorHandler);
  }

  addUser (data) { 
    return fetch (this._url + 'users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
          name: data.name,
          about: data.description
      })
    }).then(this._errorHandler);
  }

  addNewAvatar (data) { 
    return fetch (this._url + 'users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    }).then(this._errorHandler);
  }
  
  putLikes (cardId) { 
    return fetch (this._url + `cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._errorHandler);
  }

  deleteLikes (cardId) {
    return fetch (this._url + `cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._errorHandler);
  }

  deletCard (cardId) { 
    return fetch (this._url + `cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._errorHandler);
  }
}