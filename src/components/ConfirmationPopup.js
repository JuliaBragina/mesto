import Popup from "./Popup.js";

export class ConfirmationPopup extends Popup {
  constructor (handleFormSubmit) {
    super({popupSelector: '.popup-delete'});
    this._handleFormSubmit = handleFormSubmit; //this._element.remove();
    const confirmButton = this._popup.querySelector('.popup-delete__button');
    confirmButton.addEventListener('click', () => {
        this._handleFormSubmit();
        this.close();
    });
    super.setEventListeners();
  } 
}