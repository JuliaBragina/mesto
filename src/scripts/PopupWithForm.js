import Popup from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor ({popupSelector, handleFormSubmit}) {
    super({popupSelector});
    this._handleFormSubmit = handleFormSubmit;
    this._popupAddForm = document.querySelector('.popup-add__form');
  }

  _getInputValues () {
    this._inputList = this._popup.querySelectorAll('.popup-item');
    this._formValues = {};
    this._inputList.forEach(inputElement => {
      this._formValues[inputElement.name] = inputElement.value;
    });
    return this._formValues;  
  }

  setEventListeners () {
    this._popup.addEventListener('submit', () => {
      const dict = this._getInputValues();
      this._handleFormSubmit(dict.description, dict.name);
      this.close();
    });
    super.setEventListeners();
  }

  close() {
    this._popupAddForm.reset(); 
    super.close();
  }
}