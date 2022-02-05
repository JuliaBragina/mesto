// Открытие/закрытие формы для редактирования popup
const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const togglePopupVisibility = function(){
  popupElement.classList.toggle('popup_is-opened');
};

const openlePopup = function(){
  popupElement.classList.add('popup_is-opened');
};

const closePopup = function(){
  popupElement.classList.remove('popup_is-opened');
};

const closePopupByClickOnOvverlay = function(event){
  if(event.target !== event.currentTarget){
      return;
  }
  closePopup();
};

popupOpenButtonElement.addEventListener('click', openlePopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOnOvverlay);


// Редактирование имени и описания из формы popup
// Находим форму в DOM
const formElement = document.querySelector('.popup');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('.popup__item_el_name');
let jobInput = formElement.querySelector('.popup__item_el_description');
// Выберите элементы, куда должны быть вставлены значения полей
let OutputContent = document.querySelector('.content');
let nameOutput = OutputContent.querySelector('.profile__name');
let jobOutput = OutputContent.querySelector('.profile__description');
// Предзаполнение полей для редактирования формы
nameInput.value = nameOutput.innerHTML;
jobInput.value = jobOutput.textContent;

// Обработчик «отправки» формы
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    let nameInputValue = nameInput.value;
    let jobInputValue = jobInput.value;
    // Вставьте новые значения с помощью textContent
    nameOutput.innerHTML = nameInputValue;
    jobOutput.textContent = jobInputValue;

    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

// Поставить/убрать лайк под фотографией
const elementsElement = document.querySelector('.elements');
const elementsLikeElement = elementsElement.querySelectorAll('.elements__like-button');

const likeButton = function(event){
  event.target.classList.toggle('elements__like-button_is-liked');
};

for(let i = 0; i < elementsLikeElement.length; i++){
  elementsLikeElement[i].addEventListener('click', likeButton);
}