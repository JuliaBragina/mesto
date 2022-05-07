export class FormValidator {
  constructor (objects, form) {
    this._form = form;
    this._objects = objects;
  }

  _getErrorElement (inputElement) { 
    const { popupSectionSelector, inputErrorSelector } = this._objects;

    return inputElement.closest(popupSectionSelector).querySelector(inputErrorSelector);
  };

  //Функция, которая добавляет класс с ошибкой
  _showError (inputElement, errorMessage) {
    const { inputActiveClass, inputErrorClass } = this._objects;

    const errorElement = this._getErrorElement(inputElement);
    errorElement.textContent = errorMessage;
    inputElement.classList.add(inputErrorClass);
    inputElement.classList.add(inputActiveClass);
  };
    
  // Функция, которая удаляет класс с ошибкой
  _hideError (inputElement) {
    const { inputActiveClass, inputErrorClass } = this._objects;

    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.remove(inputActiveClass);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = " ";
  };

  clearErrorMessage () {
    this._inputList.forEach((element) => {
      this._hideError(element);
    });
  };

  toggleButtonState () {
    const { inactiveButtonClass } = this._objects;

    const hasInvalidInput = this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });

    if (hasInvalidInput){
      this._buttonElement.classList.add(inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled');
    }
  };

  _isValid (inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, inputElement.validationMessage);
    } else {
      this._hideError(inputElement);
    }
  };
  
  _setEventListeners () {
    this._inputList = Array.from(this._form.querySelectorAll(this._objects.popupItemSelector));
    this._buttonElement = this._form.querySelector(this._objects.submitButtonSelector);

    this._inputList.forEach((element) => {
      element.addEventListener("input", () => {
        this._isValid(element);
        this.toggleButtonState();
      });
    });
    this.toggleButtonState();
  };

  enableValidation() {
    this._setEventListeners();
  };
}