export class Card {
  constructor (link, name, cardTemplateElem, handleOpenPopup){
    this._itemTemplate = document.querySelector(cardTemplateElem).content;
    this._link = link;
    this._name = name;
    this._handleOpenPopup = handleOpenPopup;
  }

  //Лайк карточки
  _likeEventListener(item){
    item.querySelector('.elements__like-button').addEventListener('click', this._handleLiked);
  };

  _handleLiked(event){
    event.target.classList.toggle('elements__like-button_is-liked');
  };
  //Конец функции лайка карточки

  //Открытие карточки
  _openEventListeners(item){
    item.querySelector('.elements__img').addEventListener('click', this._handleOpenPopup);
  };
  //Конец открытия карточки

  //Удаление карточки
  _deleteEventListeners(item){
    item.querySelector('.elements__delete-button').addEventListener('click', this._handleDelete);
  };

  _handleDelete(event){
    event.target.closest('.elements__item').remove();
  };
  //Конец удаления карточки

  _setEventListeners () {
    this._deleteEventListeners(this._itemElement);
    this._openEventListeners(this._itemElement);
    this._likeEventListener(this._itemElement);
  }

  createCard() {
    this._itemElement = this._itemTemplate.querySelector('.elements__item').cloneNode(true);
   
    this._setEventListeners ();

    this._itemElement.querySelector('.elements__img').src = this._link;
    this._itemElement.querySelector('.elements__img').alt = this._name;
    this._itemElement.querySelector('.elements__title').textContent = this._name;
    
    return this._itemElement;
  }
}