import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}, renderLoading) {
    super({popupSelector});
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = this._popup.querySelectorAll('.popup-item');
    this._popupForm = this._popup.querySelector('.popup__form');
    this._renderLoading = renderLoading;
  }

  _getInputValues () {
    this._formValues = {};
    this._inputList.forEach(inputElement => {
      this._formValues[inputElement.name] = inputElement.value;
    });
    return this._formValues;  
  }

  setEventListeners () {
    this._popup.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._popupForm.reset(); 
  }
}