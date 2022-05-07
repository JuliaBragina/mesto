export class UserInfo {
  constructor (selectorName, selectorInfo) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorInfo);
  }
  
  //возвращает объект с данными пользователя
  //данные пользователя нужно будет подставить в форму при открытии
  getUserInfo () {
    this._getInfo = {
      name: this._name.textContent,
      description: this._info.textContent
    };
    return this._getInfo;
  }
  
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo (setNewData) {
    this._name.textContent = setNewData.name;
    this._info.textContent = setNewData.description;
  }
}