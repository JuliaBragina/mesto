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

const popupName = document.querySelector('.popup-edit__item_el_name');
const popupDescr = document.querySelector('.popup-edit__item_el_description');


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

const openCloseImg = new PopupWithImage ('.popup-img');

const popupUserInfo = new UserInfo ('.profile__name', '.profile__description');

function doCard (data) {
  const newCard =  new Card ({
    data: data, 
    cardTemplateElem: '#elements__item', 
    handleCardClick: (dataCard) => {
      openCloseImg.open(dataCard); 
    }
  });
  return  newCard;
}

const openCloseAddForm = new PopupWithForm ({
  popupSelector: '.popup-add',
  handleFormSubmit: (popupData) => {
    itemsCard.addItem(doCard(popupData).createCard());
    openCloseAddForm.close();
  }
});

openCloseImg.setEventListeners();
openCloseAddForm.setEventListeners();

const openCloseEditForm = new PopupWithForm ({
  popupSelector: '.popup-edit',
  handleFormSubmit: (dataUser) => {
    popupUserInfo.setUserInfo(dataUser);
    openCloseEditForm.close();
  }
});

openCloseEditForm.setEventListeners();

const itemsCard = new Section ({
  items: initialCards, 
  renderer: (dataCard) => {
    itemsCard.addItem(doCard(dataCard).createCard());
  }
}, '.elements');

itemsCard.renderCards();

//Открытие popups
function openEditForm () {
  popupUserInfo.getUserInfo();

  popupName.value = popupUserInfo.getUserInfo().name.textContent;
  popupDescr.value = popupUserInfo.getUserInfo().description.textContent;

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