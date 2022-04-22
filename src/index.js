import { FormValidator } from '../scripts/FormValidator.js';
import { Card } from '../scripts/Сard.js';

import '../pages/index.css';

//Для формы редактирования 
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const popupEditName = popupEditForm.querySelector('.popup-edit__item_el_name');
const popupEditDescr = popupEditForm.querySelector('.popup-edit__item_el_description');
const profileEditOpenButton = document.querySelector('.profile__edit-button');

//Для формы добавления карточки 
const popupAdd = document.querySelector('.popup-add');
const popupAddForm = document.querySelector('.popup-add__form');
const profileAddOpenButton = document.querySelector('.profile__add-button');
const popupAddNamePlace = document.querySelector('.popup-add__item_el_name');
const popupAddLinkPlace = document.querySelector('.popup-add__item_el_description');

//куда вставлять карточки
const elementsContainer = document.querySelector('.elements');

//Для формы открытия/закрытия карточки
const popupImg = document.querySelector('.popup-img');

const outputContent = document.querySelector('.content');
const nameOutput = outputContent.querySelector('.profile__name');
const jobOutput = outputContent.querySelector('.profile__description');

const popups = Array.from(document.querySelectorAll('.popup'));

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

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const editCardFormValidator = new FormValidator(objects, popupEditForm);
const addCardFormValidator = new FormValidator(objects, popupAddForm);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

//Функции для открытия и закрытия popup
function openPopupForm(popup){
  popup.classList.add('popup_is_opened');
  document.addEventListener('keydown', closeByEscape)
};

function closePopupForm (popup) {
  popup.classList.remove('popup_is_opened');
  document.removeEventListener('keydown', closeByEscape)
};

//Открытие карточки
function handleOpenPopup (event) { 
  const itemElement = event.target.closest('.elements__item');
  const imgElement = itemElement.querySelector('.elements__img');
  const titleElement = itemElement.querySelector('.elements__title');
  popupImg.querySelector('.popup-img__img').src = imgElement.src;
  popupImg.querySelector('.popup-img__description').textContent = titleElement.textContent;
  popupImg.querySelector('.popup-img__img').alt = titleElement.textContent;
  openPopupForm(popupImg);
};

//Редактирование личной информации
function handleProfileFormSubmit () {
  nameOutput.textContent = popupEditName.value;
  jobOutput.textContent = popupEditDescr.value;
  closePopupForm(popupEdit);
}
popupEditForm.addEventListener('submit', handleProfileFormSubmit);

popupEditForm.addEventListener('submit', function () { 
  nameOutput.textContent = popupEditName.value;
  jobOutput.textContent = popupEditDescr.value;
  closePopupForm(popupEdit);
});
//Конец редактирования личной информации

//Добавление карточки
function addCard (item) {
  elementsContainer.prepend(item);
};

function handleCardFormSubmit (link, place) {
  const newCard =  new Card(link, place, '#elements__item', handleOpenPopup);
  return newCard.createCard();
}

initialCards.forEach((item) => {
  addCard(handleCardFormSubmit(item.link, item.name));
});

popupAddForm.addEventListener('submit', () => {
  addCard(handleCardFormSubmit(popupAddLinkPlace.value, popupAddNamePlace.value));
  closePopupForm(popupAdd);
});
//Конец добавления карточки 

//Открытие и закрытие карточек
function openEditForm(){
  popupEditName.value = nameOutput.textContent;
  popupEditDescr.value = jobOutput.textContent;
  editCardFormValidator.clearErrorMessage();
  editCardFormValidator.toggleButtonState();
  openPopupForm(popupEdit);
};

function openAddForm(){
  popupAddForm.reset();
  addCardFormValidator.clearErrorMessage();
  addCardFormValidator.toggleButtonState();
  openPopupForm(popupAdd);
};

profileEditOpenButton.addEventListener('click', openEditForm);
profileAddOpenButton.addEventListener('click', openAddForm);

const clickOnButtonOverlay = () => {
  popups.forEach((element) => {
    element.addEventListener('click', (event) => {
      if(event.target.classList.contains('popup_is_opened')){ 
        closePopupForm(element);
      };
      if(event.target.classList.contains('popup-close')){ 
        closePopupForm(element);
      };
    });
  });
};

function closeByEscape(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_is_opened')
    closePopupForm(popupOpened);
  }
} 

const canselSending = () => {
  const formsList = Array.from(document.querySelectorAll('.popup__form'));
  formsList.forEach((element) => {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
};

clickOnButtonOverlay();
canselSending();
console.log('Hello, World!');