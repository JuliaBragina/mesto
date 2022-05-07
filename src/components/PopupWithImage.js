import  Popup  from './Popup.js';

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super({popupSelector});
    this._popupImg = this._popup.querySelector('.popup-img__img');
    this._popupDesc = this._popup.querySelector('.popup-img__description');
   }

  open (popupData) {
    this._popupImg.src = popupData.link;
    this._popupDesc.textContent = popupData.name;
    this._popupImg.alt = popupData.name;
    super.open();
  }
}