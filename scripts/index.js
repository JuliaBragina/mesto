// Форма редактирование профиля
const popupElement = document.querySelector('.popup-edit');
const popupCloseButtonElement = popupElement.querySelector('.popup-edit__close');
const formElement = document.querySelector('.popup-edit__form');

let nameInput = formElement.querySelector('.popup-edit__item_el_name');
let jobInput = formElement.querySelector('.popup-edit__item_el_description');

const popupOpenButtonElement = document.querySelector('.profile__edit-button');
let outputContent = document.querySelector('.content');
let nameOutput = outputContent.querySelector('.profile__name');
let jobOutput = outputContent.querySelector('.profile__description');

//Форма добавления карточки
const popupAddElement = document.querySelector('.popup-add');
const popupCloseButtonAddElement = popupAddElement.querySelector('.popup-add__close');
const formAddElement = document.querySelector('.popup-add__form');
const popupOpenButtonAddElement = document.querySelector('.profile__add-button');

let namePlace = formAddElement.querySelector('.popup-add__item_el_name');
let linkPlace = formAddElement.querySelector('.popup-add__item_el_description');

// Открытие/закрытие формы для редактирования popup
const openlePopup = function(){
  popupElement.classList.add('popup-edit_is-opened');
  // Предзаполнение полей
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
};

const closePopup = function(){
  popupElement.classList.remove('popup-edit_is-opened');
};

// Открытие/закрытие формы для добавления карточки
const openlePopupAdd = function(){
  popupAddElement.classList.add('popup-add_is-opened');
};

const closePopupAdd = function(){
  popupAddElement.classList.remove('popup-add_is-opened');
};


// Редактирование имени и описания из формы popup
// Обработчик «отправки» формы
function formSubmitHandler (evt) {
  // Эта строчка отменяет стандартную отправку формы.  
  evt.preventDefault();
  // Получите значение полей jobInput и nameInput из свойства value
  let nameInputValue = nameInput.value;
  let jobInputValue = jobInput.value;
  // Вставьте новые значения с помощью textContent
  nameOutput.textContent = nameInputValue;
  jobOutput.textContent = jobInputValue;

  closePopup();
}

function formSubmitHandlerAdd (evt) {  
  evt.preventDefault();
  let namePlaceValue = namePlace.value;
  let linkPlaceValue = linkPlace.value;
  console.log(namePlaceValue, linkPlaceValue);
  closePopupAdd();
}

popupOpenButtonElement.addEventListener('click', openlePopup);
popupCloseButtonElement.addEventListener('click', closePopup);

popupOpenButtonAddElement.addEventListener('click', openlePopupAdd);
popupCloseButtonAddElement.addEventListener('click', closePopupAdd);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»dd
formElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', formSubmitHandlerAdd);

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

