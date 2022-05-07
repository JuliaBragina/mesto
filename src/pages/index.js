import { FormValidator } from '../components/FormValidator'
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

import './index.css';

//Для формы редактирования 
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const profileEditOpenButton = document.querySelector('.profile__edit-button');

//Для формы добавления карточки 
const popupAddForm = document.querySelector('.popup-add__form');
const profileAddOpenButton = document.querySelector('.profile__add-button');

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
  return  newCard.createCard();
}

const openCloseAddForm = new PopupWithForm ({
  popupSelector: '.popup-add',
  handleFormSubmit: (popupData) => {
    itemsCard.addItem(doCard(popupData));
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
    itemsCard.addItem(doCard(dataCard));
  }
}, '.elements');

itemsCard.renderCards();

//Открытие popups
function openEditForm () {
  const userInfo = popupUserInfo.getUserInfo();

  popupName.value = userInfo.name;
  popupDescr.value = userInfo.description;

  editCardFormValidator.clearErrorMessage();
  editCardFormValidator.toggleButtonState();
  openCloseEditForm.open();
};

function openAddForm(){
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