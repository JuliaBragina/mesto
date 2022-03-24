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
const popupAddNamePlace = document.querySelector('.popup-add__item_el_name');
const popupAddLinkPlace = document.querySelector('.popup-add__item_el_description');

//куда вставлять карточки
const elementsContainer = document.querySelector('.elements');

//Для формы открытия/закрытия карточки
const popupImg = document.querySelector('.popup-img');
const popupImgCloseButton = popupImg.querySelector('.popup-img__close');

const itemTemplate = document.querySelector('#elements__item').content;

const outputContent = document.querySelector('.content');
const nameOutput = outputContent.querySelector('.profile__name');
const jobOutput = outputContent.querySelector('.profile__description');

function disabledButton(popup){
  const popupButton = popup.querySelector('.popup-button'); 
  popupButton.classList.add('popup-button_inactive');
  popupButton.setAttribute('disabled', true);
}

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
function createCard(namePlaceValue, linkPlaceValue){
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);

  deleteEventListeners(itemElement);
  openEventListeners(itemElement);
  likeEventListener(itemElement);

  itemElement.querySelector('.elements__img').src = linkPlaceValue;
  itemElement.querySelector('.elements__img').alt = namePlaceValue;
  itemElement.querySelector('.elements__title').textContent = namePlaceValue;
  
  return itemElement;
}

function addCard(item){
  elementsContainer.prepend(item);
};

function handleCardFormSubmit () {
  const customCard = createCard(popupAddNamePlace.value, popupAddLinkPlace.value);
  addCard(customCard);
  closePopupForm(popupAdd);
}

//Предзаполнение странички карточками
initialCards.forEach((item) => {
  const renderCard = createCard(item.name, item.link);
  addCard(renderCard);
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

profileEditOpenButton.addEventListener('click', function(){
  clearInput(popupEditName, popupEditDescr);
  popupEditName.value = nameOutput.textContent;
  popupEditDescr.value = jobOutput.textContent;
  openPopupForm(popupEdit);
  disabledButton(popupEdit);
});

profileAddOpenButton.addEventListener('click', function(){
  clearInput(popupAddNamePlace, popupAddLinkPlace);
  popupAddNamePlace.value = "";
  popupAddLinkPlace.value = "";
  openPopupForm(popupAdd);
  disabledButton(popupAdd);
});

const clickOnCloseButton = () => {
  const formsList = Array.from(document.querySelectorAll('.popup-close'));
  formsList.forEach((element) => {
    element.addEventListener('click', () => {
      closePopupForm(element.closest('.popup'));
    });
  });
};

const pressOnOverlay = () => {
  const formsList = Array.from(document.querySelectorAll('.popup'));
  formsList.forEach((element) => {
    element.addEventListener('click', (event) => {
      if(event.target.classList.contains('popup_is_opened')){ 
        closePopupForm(element);
      };
    });
  });
};

const pressOnEsc = () => {
  const formsList = Array.from(document.querySelectorAll('.popup'));
  formsList.forEach((element) => {
    document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){ 
      if(element.classList.contains('popup_is_opened')){
        closePopupForm(element);
      };
    };
    element.removeEventListener('keydown', pressOnEsc);
    });
  });
};

clickOnCloseButton();
pressOnOverlay();
pressOnEsc();

const canselSending = () => {
  const formsList = Array.from(document.querySelectorAll('.popup__form'));
  formsList.forEach((element) => {
    element.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  });
};

canselSending();
