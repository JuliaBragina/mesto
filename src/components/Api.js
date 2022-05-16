export class Api { 
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _checkResponse = (res) => {
    if(res.ok){
      return res.json();
    }
    return Promise.reject('Произошла ошибка');
  }

  getAllCards () {
    return fetch (this._url + 'cards', {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse);
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
    }).then(this._checkResponse);
  }

  getUser () { 
    return fetch (this._url + 'users/me', {
      method: 'GET',
      headers: this._headers
    }).then(this._checkResponse);
  }

  addUser (data) { 
    return fetch (this._url + 'users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
          name: data.name,
          about: data.description
      })
    }).then(this._checkResponse);
  }

  addNewAvatar (data) { 
    return fetch (this._url + 'users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    }).then(this._checkResponse);
  }
  
  putLikes (cardId) { 
    return fetch (this._url + `cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkResponse);
  }

  deleteLikes (cardId) {
    return fetch (this._url + `cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkResponse);
  }

  deletCard (cardId) { 
    return fetch (this._url + `cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkResponse);
  }
}