import Popup from "./Popup.js";

export class ConfirmationPopup extends Popup {
  constructor (api, element, cardId) {
    super({popupSelector: '.popup-delete'});
    //this._handleFormSubmit = handleFormSubmit; //this._element.remove();
    this._api = api;
    this._element = element;
    this._cardId = cardId;
    //this._cardID = cardID;
  }
  
  confirmImage () {
    const confirmButton = this._popup.querySelector('.popup-delete__button');
    confirmButton.addEventListener('click', () => {
        this._api.deletCard(this._cardId)
          .then(() => this._element.remove());
        this.close();
    });
    super.setEventListeners();
  }
}