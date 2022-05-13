export class Api { 
  constructor (config) {
    this._headers = config.headers;
  }

  getAllCards () { //возвращается промис 
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-40/cards', {
      method: 'GET',
      headers: this._headers
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  addCards (data) { 
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-40/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
          name: data.name,
          link: data.link,
          likes: data.likes
      })
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  getUser () { 
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-40/users/me', {
      method: 'GET',
      headers: this._headers
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  addUser (data) { 
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-40/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
          name: data.name,
          about: data.description
      })
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  addNewAvatar (data) { 
    return fetch ('https://mesto.nomoreparties.co/v1/cohort-40/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.link
      })
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }
  
  putLikes (cardId) { 
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}/likes`, {
      method: 'PUT',
      headers: this._headers
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  deleteLikes (cardId) {
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}/likes`, {
      method: 'DELETE',
      headers: this._headers
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  deletCard (cardId) { 
    return fetch (`https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }
}