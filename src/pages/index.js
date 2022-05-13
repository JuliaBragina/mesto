import { FormValidator } from '../components/FormValidator'
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api';

import './index.css';

//Для формы редактирования 
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const profileEditOpenButton = document.querySelector('.profile__edit-button');

//Для формы добавления карточки 
const popupAddForm = document.querySelector('.popup-add__form');
const profileAddOpenButton = document.querySelector('.profile__add-button');

const popupUpdateFrom = document.querySelector('.popup-update');
const profileUpdateAvatarButtnon = document.querySelector('.profile__avatar');

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

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-40/cards',
  headers: {
    authorization: '5907e0a2-56a3-4cfa-b788-58e2a6027744', //Идентификатор группы: cohort-40
    "Content-Type": "application/json"
  }
});

const apiUser = new Api({
  url: 'https://nomoreparties.co/v1/cohort-40/users/me',
  headers: {
    authorization: '5907e0a2-56a3-4cfa-b788-58e2a6027744', //Идентификатор группы: cohort-40
    "Content-Type": "application/json"
  }
});

const apiAvatar= new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-40/users/me/avatar',
  headers: {
    authorization: '5907e0a2-56a3-4cfa-b788-58e2a6027744', //Идентификатор группы: cohort-40
    "Content-Type": "application/json"
  }
});

let itemsCard = 0;
const cards = api.getAllCards(); //возвращает пропис, то дальше работаем асинхронно
cards.then((data) => {

  itemsCard = new Section ({
    items: data, 
    renderer: (dataCard) => {
      itemsCard.addItem(doCard(dataCard));
    }
  }, '.elements');
  
  itemsCard.renderCards();

}).catch((err) => alert(err));

const editCardFormValidator = new FormValidator(objects, popupEditForm);
const addCardFormValidator = new FormValidator(objects, popupAddForm);
const updateFormValidator = new FormValidator(objects, popupUpdateFrom);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();
updateFormValidator.enableValidation();

const openCloseImg = new PopupWithImage ('.popup-img');

const popupUserInfo = new UserInfo ('.profile__name', '.profile__description', '.profile__avatar', apiUser);
popupUserInfo.setUserInfoServer();

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
  api.addCards(popupData)
    .then((card) => itemsCard.addItem(doCard(card)));
    openCloseAddForm.close();
  }
});

openCloseImg.setEventListeners();
openCloseAddForm.setEventListeners();

const openCloseEditForm = new PopupWithForm ({
  popupSelector: '.popup-edit',
  handleFormSubmit: (dataUser) => {
  apiUser.addUser(dataUser)
    .then((info) => popupUserInfo.setUserInfo(info));
  openCloseEditForm.close();
  }
});

openCloseEditForm.setEventListeners();

const openCloseUpdateAvatarForm = new PopupWithForm ({
  popupSelector: '.popup-update',
  handleFormSubmit: (formValues) => {
  apiAvatar.addNewAvatar(formValues)
    .then((info) => popupUserInfo.setUserAvatar(info));
  openCloseUpdateAvatarForm.close();
  }
});

openCloseUpdateAvatarForm.setEventListeners();

//Открытие popups
function openEditForm () {
  const userInfo = popupUserInfo.getUserInfo();
  
  popupName.value = userInfo.name;
  popupDescr.value = userInfo.description;

  editCardFormValidator.clearErrorMessage();
  editCardFormValidator.toggleButtonState();
  openCloseEditForm.open();
};

function openAddForm () {
  addCardFormValidator.clearErrorMessage();
  addCardFormValidator.toggleButtonState();
  openCloseAddForm.open();
};

function openUpdateForm () {
  updateFormValidator.clearErrorMessage();
  updateFormValidator.toggleButtonState();
  openCloseUpdateAvatarForm.open();
}


profileEditOpenButton.addEventListener('click', openEditForm);
profileAddOpenButton.addEventListener('click', openAddForm);
profileUpdateAvatarButtnon.addEventListener('click', openUpdateForm);

const canselSending = () => {
  const formsList = Array.from(document.querySelectorAll('.popup__form'));
  formsList.forEach((element) => {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
};
canselSending();