export class Api { 
  constructor (config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  getAllCards () { //возвращается промис 
    return fetch (this._url, {
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
    return fetch (this._url, {
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
    return fetch (this._url, {
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
    return fetch (this._url, {
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
    return fetch (this._url, {
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
  
  putLikes () { 
    return fetch (this._url, {
      method: 'PUT',
      headers: this._headers
    }).then((res) => {
      if(res.ok){
        return res.json();
      }
      return Promise.reject('Произошла ошибка');
    });
  }

  deleteLikes () { 
    return fetch (this._url, {
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