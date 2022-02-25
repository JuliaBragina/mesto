//Для формы редактирования 
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const popupEditName = popupEditForm.querySelector('.popup-edit__item_el_name');
const popupEditDescr = popupEditForm.querySelector('.popup-edit__item_el_description');
const popupEditCloseButton = popupEdit.querySelector('.popup-edit__close');
const profileEditOpenButton = document.querySelector('.profile__edit-button');

//Для формы добавления карточки 
const popupAdd = document.querySelector('.popup-add');
const elementsContainer = document.querySelector('.elements'); //куда вставлять карточки
const popupAddForm = document.querySelector('.popup-add__form');
const popupAddCloseButton = popupAdd.querySelector('.popup-add__close');
const profileAddOpenButton = document.querySelector('.profile__add-button');

let outputContent = document.querySelector('.content');
let nameOutput = outputContent.querySelector('.profile__name');
let jobOutput = outputContent.querySelector('.profile__description');

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

//Лайк карточки
function likeEventListener(item){
  item.querySelector('.elements__like-button').addEventListener('click', handlerLiked);
};

function handlerLiked(event){
  event.target.classList.toggle('elements__like-button_is-liked');
};
//Конец функции лайка карточки

//Удаление карточки
function deleteEventListeners (item){
  item.querySelector('.elements__delete-button').addEventListener('click', handlerDelete);
};

function handlerDelete(event){
  event.target.closest('.elements__item').remove();
};
//Конец удаления карточки

//Открытие карточки
function openEventListeners (item){
  item.querySelector('.elements__img').addEventListener('click', handlerOpenPopup);
};

function handlerOpenPopup(event){
  const popupImgElemnt = document.querySelector('.popup-img');
  const itemElement = event.target.closest('.elements__item');
  const imgElement = itemElement.querySelector('.elements__img');
  const titleElement = itemElement.querySelector('.elements__title');
  popupImgElemnt.querySelector('.popup-img__img').src = imgElement.src;
  popupImgElemnt.querySelector('.popup-img__description').textContent = titleElement.textContent;
  popupImgElemnt.classList.add('popup-img_is-opened');
};
//Конец открытия карточки

//Закрытие карточки
const closeImgPopup = document.querySelector('.popup-img__close').addEventListener('click', function(){
  document.querySelector('.popup-img').classList.remove('popup-img_is-opened');
});
//Конец закрытия карточки

//Редактирование личной информации
const openPopupEditForm = function(){
  popupEdit.classList.add('popup-edit_is-opened');
  popupEditName.value = nameOutput.textContent;
  popupEditDescr.value = jobOutput.textContent;
};

const closePopupEditForm = function(){
  popupEdit.classList.remove('popup-edit_is-opened');
};

function handlerSubmit (evt) {
  evt.preventDefault();
  nameOutput.textContent = popupEditName.value;
  jobOutput.textContent = popupEditDescr.value;
  closePopupEditForm();
}

profileEditOpenButton.addEventListener('click', openPopupEditForm);
popupEditCloseButton.addEventListener('click', closePopupEditForm);
popupEditForm.addEventListener('submit', handlerSubmit);
//Конец редактирования личной информации

//Форма добавления карточки
const openPopupAddForm = function(){
  popupAdd.classList.add('popup-add_is-opened');
};

const closePopupAddForm = function(){
  popupAdd.classList.remove('popup-add_is-opened');
};

popupAddCloseButton.addEventListener('click', closePopupAddForm);
profileAddOpenButton.addEventListener('click', openPopupAddForm);

popupAddForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  let namePlace = document.querySelector('.popup-add__item_el_name');
  let linkPlace = document.querySelector('.popup-add__item_el_description');
  
  addCard(namePlace.value, linkPlace.value);
  closePopupAddForm();
});

function addCard(namePlaceValue, linkPlaceValue){
  const itemTemplate = document.querySelector('#elements__item').content;
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);

  deleteEventListeners(itemElement);
  openEventListeners(itemElement);

  likeEventListener(itemElement);

  itemElement.querySelector('.elements__img').src = linkPlaceValue;
  itemElement.querySelector('.elements__title').textContent = namePlaceValue;

  elementsContainer.prepend(itemElement);
};
//Конец формы добавления карточки 

//Предзаполнение странички карточками
initialCards.forEach((item) => {
  addCard(item.name, item.link);
});

