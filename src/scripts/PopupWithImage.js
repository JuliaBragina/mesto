import  Popup  from './Popup.js';

export class PopupWithImage extends Popup {
  constructor ({popupSelector}) {
    super({popupSelector});
  }

  open = (event)  => {
    const itemElement = event.target.closest('.elements__item');
    this._popup.querySelector('.popup-img__img').src = itemElement.querySelector('.elements__img').src;
    this._popup.querySelector('.popup-img__description').textContent = itemElement.querySelector('.elements__title').textContent;
    this._popup.querySelector('.popup-img__img').alt = itemElement.querySelector('.elements__title').textContent;
    super.open();
  }
}