import { popupEditForm, profileEditOpenButton, popupAddForm, profileAddOpenButton, popupUpdateFrom, profileUpdateAvatarButtnon, popupName, popupDescr } from '../utils/constants';
import { FormValidator } from '../components/FormValidator'
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { ConfirmationPopup } from '../components/ConfirmationPopup.js';

import './index.css';

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
  url: 'https://mesto.nomoreparties.co/v1/cohort-40/',
  headers: {
    authorization: '5907e0a2-56a3-4cfa-b788-58e2a6027744',
    "Content-Type": "application/json"
  }
});
const openCloseImg = new PopupWithImage ('.popup-img');
const popupUserInfo = new UserInfo ('.profile__name', '.profile__description', '.profile__avatar', api);
const openCloseConfForm = new ConfirmationPopup ('.popup-delete');

const editCardFormValidator = new FormValidator(objects, popupEditForm);
const addCardFormValidator = new FormValidator(objects, popupAddForm);
const updateFormValidator = new FormValidator(objects, popupUpdateFrom);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();
updateFormValidator.enableValidation();

let userId = 0;
let itemsCard = 0;

api.getUser()
  .then((data) => {
    document.querySelector('.profile__name').textContent = data.name;
    document.querySelector('.profile__description').textContent = data.about;
    document.querySelector('.profile__avatar').src = data.avatar;
    userId = data._id;
  })
  .then(() => {
    api.getAllCards()
      .then((data) => {
      itemsCard = new Section ({
        items: data, 
        renderer: (dataCard) => {
          itemsCard.addItem(doCard(dataCard, userId));
        }
      }, '.elements');
    itemsCard.renderCards();
    })
    .catch((err) => alert(err));
  });

function doCard (data, userId) {
  const newCard =  new Card ({
    data: data, 
    cardTemplateElem: '#elements__item',
    handleCardClick: (dataCard) => {
      openCloseImg.open(dataCard);
    },
    handleSubmitClick: (deleteHandler) => {
      openCloseConfForm.open();
      openCloseConfForm.setHandler(deleteHandler);
    }
  }, api, userId);
  return newCard.createCard();
}

const openCloseAddForm = new PopupWithForm ({
  popupSelector: '.popup-add',
  handleFormSubmit: (popupData) => {
  return api.addCards(popupData)
    .then((card) => itemsCard.addItem(doCard(card, userId)))
    .catch((err) => alert(err));
  },
});

const openCloseEditForm = new PopupWithForm ({
  popupSelector: '.popup-edit',
  handleFormSubmit: (dataUser) => {
  return api.addUser(dataUser)
    .then((info) => popupUserInfo.setUserInfo(info))
    .catch((err) => alert(err));
  },
});

const openCloseUpdateAvatarForm = new PopupWithForm ({
  popupSelector: '.popup-update',
  handleFormSubmit: (formValues) => {
  return api.addNewAvatar(formValues)
    .then((info) => popupUserInfo.setUserAvatar(info))
    .catch((err) => alert(err));
  },
});

openCloseConfForm.setEventListeners();
openCloseImg.setEventListeners();
openCloseAddForm.setEventListeners();
openCloseEditForm.setEventListeners();
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