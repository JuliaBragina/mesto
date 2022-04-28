import { FormValidator } from './scripts/FormValidator.js';
import { Card } from './scripts/Сard.js';
import { Section } from './scripts/Section.js';
import { PopupWithImage } from './scripts/PopupWithImage.js';
import { PopupWithForm } from './scripts/PopupWithForm.js';
import { UserInfo } from './scripts/UserInfo.js';

import './pages/index.css';

//Для формы редактирования 
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const profileEditOpenButton = document.querySelector('.profile__edit-button');

//Для формы добавления карточки 
const popupAddForm = document.querySelector('.popup-add__form');
const profileAddOpenButton = document.querySelector('.profile__add-button');

const outputContent = document.querySelector('.content');
const nameOutput = outputContent.querySelector('.profile__name');
const jobOutput = outputContent.querySelector('.profile__description');

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

const openCloseImg = new PopupWithImage ({
  popupSelector: '.popup-img'
});

openCloseImg.setEventListeners();

const popupUserInfo = new UserInfo('.popup-edit__item_el_name', '.popup-edit__item_el_description');

const openCloseAddForm = new PopupWithForm ({
  popupSelector: '.popup-add',
  handleFormSubmit: (popupAddLinkPlace, popupAddNamePlace) => {
    const newCard =  new Card(popupAddLinkPlace, popupAddNamePlace, '#elements__item', openCloseImg.open);
    itemsCard.addItem(newCard.createCard());
    openCloseAddForm.close();
  }
});

openCloseAddForm.setEventListeners();

const openCloseEditForm = new PopupWithForm ({
  popupSelector: '.popup-edit',
  handleFormSubmit: () => {
    openCloseEditForm.close();
    const dir = popupUserInfo.getUserInfo();
    nameOutput.textContent = dir.name.value;
    jobOutput.textContent = dir.description.value;
  }
});

openCloseEditForm.setEventListeners();

const itemsCard = new Section ({
  items: initialCards, 
  renderer: (link, place) => {
    const newCard =  new Card(link, place, '#elements__item', openCloseImg.open);
    itemsCard.addItem(newCard.createCard());
  }
}, '.elements');

itemsCard.renderCards();

//Открытие popups
function openEditForm(){
  popupUserInfo.setUserInfo(nameOutput.textContent, jobOutput.textContent);
  const dir = popupUserInfo.getUserInfo();

  dir.name.textContent = nameOutput.textContent;
  dir.description.textContent = jobOutput.textContent;

  editCardFormValidator.clearErrorMessage();
  editCardFormValidator.toggleButtonState();
  openCloseEditForm.open();
};

function openAddForm(){
  popupAddForm.reset();
  addCardFormValidator.clearErrorMessage();
  addCardFormValidator.toggleButtonState();
  openCloseAddForm.open();
};

profileEditOpenButton.addEventListener('click', openEditForm);
profileAddOpenButton.addEventListener('click', openAddForm);

const canselSending = () => {
  const formsList = Array.from(document.querySelectorAll('.popup__form'));
  formsList.forEach((element) => {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
};
canselSending();