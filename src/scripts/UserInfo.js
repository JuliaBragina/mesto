export class UserInfo {
  constructor (selectorName, selectorInfo) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorInfo);
    this._getInfo = {
      name: "",
      description: ""
    };
  }
  
  //возвращает объект с данными пользователя
  //данные пользователя нужно будет подставить в форму при открытии
  getUserInfo () {
    this._getInfo = {
      name: this._name,
      description: this._info
    };
    return this._getInfo;
  }
  
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo (nameOut, infOut) {
    this._name.value = nameOut;
    this._info.value = infOut;
  }
}