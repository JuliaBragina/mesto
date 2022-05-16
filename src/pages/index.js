import { popupEditForm, profileEditOpenButton, popupAddForm, profileAddOpenButton, popupUpdateFrom, profileUpdateAvatarButtnon, popupName, popupDescr, objects } from '../utils/constants';
import { FormValidator } from '../components/FormValidator'
import { Card } from '../components/Сard.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { ConfirmationPopup } from '../components/ConfirmationPopup.js';

import './index.css';

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-40/',
  headers: {
    authorization: '5907e0a2-56a3-4cfa-b788-58e2a6027744',
    "Content-Type": "application/json"
  }
});
const openCloseImg = new PopupWithImage ('.popup-img');
const popupUserInfo = new UserInfo ('.profile__name', '.profile__description', '.profile__avatar');
const openCloseConfForm = new ConfirmationPopup ('.popup-delete');

const editCardFormValidator = new FormValidator(objects, popupEditForm);
const addCardFormValidator = new FormValidator(objects, popupAddForm);
const updateFormValidator = new FormValidator(objects, popupUpdateFrom);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();
updateFormValidator.enableValidation();

let userId = null;
let itemsCard = null;


Promise.all([api.getUser(), api.getAllCards()])
  .then(([data, cards]) => {
    popupUserInfo.setUserInfo({
      name: data.name,
      about: data.about
    });
    popupUserInfo.setUserAvatar(data);
    popupUserInfo.setUserId(data._id);

    itemsCard = new Section ({
      items: cards, 
      renderer: (dataCard) => {
        itemsCard.addItem(makeCard(dataCard, popupUserInfo.getUserId()));
      }
    }, '.elements');
    itemsCard.renderCards();
    })
  .catch(err => {
    alert(err);
  });

function makeCard (data, userId) {
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
    .then((card) => itemsCard.addItem(makeCard(card, popupUserInfo.getUserId())))
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