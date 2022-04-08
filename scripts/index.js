import { FormValidator } from './FormValidator.js';
import { Card } from './Сards.js';

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

const addCardFormValidator = new FormValidator(objects, popupEditForm);
const editCardFormValidator = new FormValidator(objects, popupAddForm);

addCardFormValidator.enableValidation();
editCardFormValidator.enableValidation();

function disabledButton(popup){
  const popupButton = popup.querySelector('.popup-button'); 
  popupButton.classList.add('popup-button_inactive');
  popupButton.setAttribute('disabled', true);
}

//Функции для открытия и закрытия popup
function openPopupForm(popup){
  popup.classList.add('popup_is_opened');
  document.addEventListener('keydown', closeByEscape)
};

function closePopupForm(popup){
  popup.classList.remove('popup_is_opened');
  document.removeEventListener('keydown', closeByEscape)
};

//Открытие карточки
function handleOpenPopup(event){ 
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

//Форма добавления карточки
function addCard(item){
  elementsContainer.prepend(item);
};

function handleCardFormSubmit () {
  const customCard = new Card(popupAddLinkPlace.value, popupAddNamePlace.value, '#elements__item', handleOpenPopup);
  addCard(customCard.createCard());
  closePopupForm(popupAdd);
}

//Предзаполнение странички карточками
initialCards.forEach((item) => {
  const renderCard = new Card(item.link, item.name, '#elements__item', handleOpenPopup);
  addCard(renderCard.createCard());
});

popupAddForm.addEventListener('submit', handleCardFormSubmit);
//Конец формы добавления карточки 

//Открытие и закрытие карточек
function clearInput (name, description){
  name.classList.remove('popup-item_type_error');
  description.classList.remove('popup-item_type_error');
  name.classList.remove('popup__input-error_active');
  description.classList.remove('popup__input-error_active');
  name.closest('.popup__section').querySelector('.popup__input-error').textContent = " ";
  description.closest('.popup__section').querySelector('.popup__input-error').textContent = " ";
}

function openEditForm(){
  clearInput(popupEditName, popupEditDescr);
  popupEditName.value = nameOutput.textContent;
  popupEditDescr.value = jobOutput.textContent;
  openPopupForm(popupEdit);
  disabledButton(popupEdit);
};

function openAddForm(){
  clearInput(popupAddNamePlace, popupAddLinkPlace);
  document.getElementById('add-form').reset();
  openPopupForm(popupAdd);
  disabledButton(popupAdd);
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
