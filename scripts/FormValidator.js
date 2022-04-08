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
    const { inputActiveClass, inputErrorClass,} = this._objects;

    const errorElement = this._getErrorElement(inputElement);
    inputElement.classList.remove(inputActiveClass);
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = " ";
    
  };

  _toggleButtonState (inputList, buttonElement) {
    const { inactiveButtonClass } = this._objects;

    let hasInvalidInput = inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });

    if (hasInvalidInput){
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
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
    const inputList = Array.from(this._form.querySelectorAll(this._objects.popupItemSelector));
    const buttonElement = this._form.querySelector(this._objects.submitButtonSelector);

    inputList.forEach((element) => {
      element.addEventListener("input", () => {
        this._isValid(element);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
    this._toggleButtonState(inputList, buttonElement);
  };

  enableValidation() {
    this._setEventListeners();
  };
}