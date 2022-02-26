//Для формы редактирования 
const popupEdit = document.querySelector('.popup-edit');
const popupEditForm = popupEdit.querySelector('.popup-edit__form');
const popupEditName = popupEditForm.querySelector('.popup-edit__item_el_name');
const popupEditDescr = popupEditForm.querySelector('.popup-edit__item_el_description');
const popupEditCloseButton = popupEdit.querySelector('.popup-edit__close');
const profileEditOpenButton = document.querySelector('.profile__edit-button');

//Для формы добавления карточки 
const popupAdd = document.querySelector('.popup-add');
const popupAddForm = document.querySelector('.popup-add__form');
const popupAddCloseButton = popupAdd.querySelector('.popup-add__close');
const profileAddOpenButton = document.querySelector('.profile__add-button');
const namePlace = document.querySelector('.popup-add__item_el_name');
const linkPlace = document.querySelector('.popup-add__item_el_description');

//куда вставлять карточки
const elementsContainer = document.querySelector('.elements');

//Для формы открытия карточки
const popupImg = document.querySelector('.popup-img');

const itemTemplate = document.querySelector('#elements__item').content;

const outputContent = document.querySelector('.content');
const nameOutput = outputContent.querySelector('.profile__name');
const jobOutput = outputContent.querySelector('.profile__description');

popupEditName.value = nameOutput.textContent;
popupEditDescr.value = jobOutput.textContent;

//Функции для открытия и закрытия popup
function openPopupForm(popup){
  popup.classList.add('popup_is_opened');
};

function closePopupForm(popup){
  popup.classList.remove('popup_is_opened');
};

//Лайк карточки
function likeEventListener(item){
  item.querySelector('.elements__like-button').addEventListener('click', handleLiked);
};

function handleLiked(event){
  event.target.classList.toggle('elements__like-button_is-liked');
};
//Конец функции лайка карточки

//Удаление карточки
function deleteEventListeners(item){
  item.querySelector('.elements__delete-button').addEventListener('click', handleDelete);
};

function handleDelete(event){
  event.target.closest('.elements__item').remove();
};
//Конец удаления карточки

//Открытие карточки
function openEventListeners(item){
  item.querySelector('.elements__img').addEventListener('click', handleOpenPopup);
};

function handleOpenPopup(event){ 
  const itemElement = event.target.closest('.elements__item');
  const imgElement = itemElement.querySelector('.elements__img');
  const titleElement = itemElement.querySelector('.elements__title');
  popupImg.querySelector('.popup-img__img').src = imgElement.src;
  popupImg.querySelector('.popup-img__description').textContent = titleElement.textContent;
  popupImg.querySelector('.popup-img__img').alt = titleElement.textContent;
  openPopupForm(popupImg);
};
//Конец открытия карточки

//Закрытие карточки
document.querySelector('.popup-img__close').addEventListener('click', function(){
  closePopupForm(popupImg);
});
//Конец закрытия карточки


//Редактирование личной информации
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  nameOutput.textContent = popupEditName.value;
  jobOutput.textContent = popupEditDescr.value;
  closePopupForm(popupEdit);
}
popupEditForm.addEventListener('submit', handleProfileFormSubmit);
//Конец редактирования личной информации

//Форма добавления карточки
function createCard(namePlaceValue, linkPlaceValue, item){
  deleteEventListeners(item);
  openEventListeners(item);
  likeEventListener(item);

  item.querySelector('.elements__img').src = linkPlaceValue;
  item.querySelector('.elements__img').alt = namePlaceValue;
  item.querySelector('.elements__title').textContent = namePlaceValue;
}

function addCard(item){
  elementsContainer.prepend(item);
};

function handleCardFormSubmit (evt) {
  evt.preventDefault();
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);
  createCard(namePlace.value, linkPlace.value, itemElement);
  addCard(itemElement);
  closePopupForm(popupAdd);
}

//Предзаполнение странички карточками
initialCards.forEach((item) => {
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);
  createCard(item.name, item.link, itemElement);
  addCard(itemElement);
});

popupAddForm.addEventListener('submit', handleCardFormSubmit);
//Конец формы добавления карточки 

//Открытие и закрытие карточек
profileEditOpenButton.addEventListener('click', function(){
  openPopupForm(popupEdit);
});

popupEditCloseButton.addEventListener('click', function(){
  closePopupForm(popupEdit);
});

profileAddOpenButton.addEventListener('click', function(){
  openPopupForm(popupAdd);
});

popupAddCloseButton.addEventListener('click', function(){
  closePopupForm(popupAdd);
});
