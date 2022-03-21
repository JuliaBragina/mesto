const objects = {
  formSelector: '.popup__form',
  popupItemSelector: '.popup-item',
  submitButtonSelector: '.popup-button',
  inactiveButtonClass: 'popup-button_inactive',
  inputErrorClass: 'popup-item_type_error',
  inputActiveClass: 'popup__input-error_active',
  popupSectionSelector: '.popup__section',
  inputErrorSelector: '.popup__input-error'
}; 

const getErrorElement = (inputElement, popupSectionSelector, inputErrorSelector) => { 
  return inputElement.closest(popupSectionSelector).querySelector(inputErrorSelector);
};

//Функция, которая добавляет класс с ошибкой
const showError = (formElement, inputElement, errorMessage, inputActiveClass, inputErrorClass, popupSectionSelector, inputErrorSelector) => {
  const errorElement = getErrorElement(inputElement, popupSectionSelector, inputErrorSelector);
  errorElement.textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
  inputElement.classList.add(inputActiveClass);
};
  
// Функция, которая удаляет класс с ошибкой
const hideError = (formElement, inputElement, inputActiveClass, inputErrorClass, popupSectionSelector, inputErrorSelector) => {
  const errorElement = getErrorElement(inputElement, popupSectionSelector, inputErrorSelector);
  inputElement.classList.remove(inputActiveClass);
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = " ";
};

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  const hasInvalidInput = inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });

  if(hasInvalidInput){
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  }else{
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

const isValid = (formElement, inputElement, inputActiveClass, inputErrorClass, popupSectionSelector, inputErrorSelector) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, inputActiveClass, inputErrorClass, popupSectionSelector, inputErrorSelector);
  } else {
    hideError(formElement, inputElement, inputActiveClass, inputErrorClass, popupSectionSelector, inputErrorSelector);
  }
};

const setEventListeners = (formElement, objects) => {
  const inputList = Array.from(formElement.querySelectorAll(objects.popupItemSelector));
  const buttonElement = formElement.querySelector(objects.submitButtonSelector);
  inputList.forEach((element) => {
    element.addEventListener("input", (event) => {
      isValid(formElement, element, objects.inputActiveClass, objects.inputErrorClass, objects.popupSectionSelector, objects.inputErrorSelector);
      toggleButtonState(inputList, buttonElement, objects.inactiveButtonClass);
    });
  });
  toggleButtonState(inputList, buttonElement, objects.inactiveButtonClass);
};

const enableValidation = (objects) => {
  const formsList = Array.from(document.querySelectorAll(objects.formSelector));
  formsList.forEach((element) => {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
    setEventListeners(element, objects);
  });
};

enableValidation(objects);