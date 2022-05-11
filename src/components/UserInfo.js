export class UserInfo {
  constructor (selectorName, selectorInfo, selectorAvatar, apiUser) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorInfo);
    this._avatar = document.querySelector(selectorAvatar);
    this._apiUser = apiUser;
  }

  setUserInfoServer () {
    const user = this._apiUser.getUser();
    user.then((data) => {
      this._name.textContent = data.name;
      this._info.textContent = data.about;
      this._avatar.src = data.avatar;
    });
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

  setUserAvatar (setNewData) {
    this._avatar.src = setNewData.avatar;
  }
}