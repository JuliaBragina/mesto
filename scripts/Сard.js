export class Card {
  constructor (link, name, cardTemplateElem, handleOpenPopup){
    this._itemTemplate = document.querySelector(cardTemplateElem).content;
    this._link = link;
    this._name = name;
    this._handleOpenPopup = handleOpenPopup;
  }

  _setEventListeners () {
    this._itemElement.querySelector('.elements__delete-button').addEventListener('click', (event) => {
      this._itemElement.remove();
    });

    this._itemElement.querySelector('.elements__img').addEventListener('click', this._handleOpenPopup);
  
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('elements__like-button_is-liked');
    });
  }

  createCard() {
    this._itemElement = this._itemTemplate.querySelector('.elements__item').cloneNode(true);
    this._cardImage = this._itemElement.querySelector('.elements__img');
    this._likeButton = this._itemElement.querySelector('.elements__like-button');
    this._setEventListeners ();

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._itemElement.querySelector('.elements__title').textContent = this._name;
    
    return this._itemElement;
  }
}