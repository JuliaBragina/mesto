import  Popup  from './Popup.js';

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super({popupSelector});
    this._popupSrc = this._popup.querySelector('.popup-img__img');
    this._popupText = this._popup.querySelector('.popup-img__description');
    this._popupAlt = this._popup.querySelector('.popup-img__img');
   }

  open (popupData) {
    this._popupSrc.src = popupData.link;
    this._popupText.textContent = popupData.name;
    this._popupAlt.alt = popupData.name;
    super.open();
  }
}