const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = popupElement.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');

const formElement = document.querySelector('.popup__form-name');
let nameInput = formElement.querySelector('.popup__item_el_name');
let jobInput = formElement.querySelector('.popup__item_el_description');
let outputContent = document.querySelector('.content');
let nameOutput = outputContent.querySelector('.profile__name');
let jobOutput = outputContent.querySelector('.profile__description');

// Открытие/закрытие формы для редактирования popup
const openlePopup = function(){
  popupElement.classList.add('popup_is-opened');
  // Предзаполнение полей
  nameInput.value = nameOutput.textContent;
  jobInput.value = jobOutput.textContent;
};

const closePopup = function(){
  popupElement.classList.remove('popup_is-opened');
};

popupOpenButtonElement.addEventListener('click', openlePopup);
popupCloseButtonElement.addEventListener('click', closePopup);

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

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);