export class UserInfo {
  constructor(selectorName, selectorInfo, selectorAvatar) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorInfo);
    this._avatar = document.querySelector(selectorAvatar);
  }

  //возвращает объект с данными пользователя
  //данные пользователя нужно будет подставить в форму при открытии
  getUserInfo() {
    this._getInfo = {
      name: this._name.textContent,
      description: this._info.textContent
    };
    return this._getInfo;
  }

  setUserId(userId) {
    this._userId = userId;
  }

  getUserId() {
    return this._userId;
  }
  
  //принимает новые данные пользователя и добавляет их на страницу
  setUserInfo(setNewData) {
    this._name.textContent = setNewData.name;
    this._info.textContent = setNewData.about;
  }

  setUserAvatar(setNewData) {
    this._avatar.src = setNewData.avatar;
  }
}