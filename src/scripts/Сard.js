export class Card {
  constructor (link, name, cardTemplateElem, handleCardClick){
    this._itemTemplate = document.querySelector(cardTemplateElem).content;
    this._link = link;
    this._name = name;
    this._handleCardClick= handleCardClick;
  }

  _setEventListeners () {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._element.remove();
    });

    this._element.querySelector('.elements__img').addEventListener('click', this._handleCardClick);
  
    this._likeButton.addEventListener('click', () => {
      this._likeButton.classList.toggle('elements__like-button_is-liked');
    });
  }

  _getTamlateElement () {
    const itemElement = this._itemTemplate.querySelector('.elements__item').cloneNode(true)
    return itemElement;
  }

  createCard() {
    this._element = this._getTamlateElement();
    this._likeButton = this._element.querySelector('.elements__like-button');
        
    this._setEventListeners ();

    this._element.querySelector('.elements__img').src = this._link;
    this._element.querySelector('.elements__img').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    
    return this._element;
  }
}