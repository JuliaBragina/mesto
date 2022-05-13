import { ConfirmationPopup } from "./ConfirmationPopup.js";

export class Card {
  constructor ({data, cardTemplateElem, handleCardClick}, api) {
    this._itemTemplate = document.querySelector(cardTemplateElem).content;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._isLiked = false;
    this._handleCardClick = handleCardClick;
    this._api = api;
    this._myID = '373a3bc04de112d755b1d107';
  }

  _checkMyLikes () {
    for(let i = 0; i<=this._likes.length-1; i++) {
      if(this._likes[i]._id == this._myID) {
        this._likeButton.classList.add('elements__like-button_is-liked');
        this._isLiked == true;
      }
    }
  }

  _setEventListeners () {
    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick({
        link: this._link,
        name: this._name});
    });

    this._likeButton.addEventListener('click', () => {
      const cardId = this._id;
      if( this._isLiked == false ) {
        this._likeButton.classList.add('elements__like-button_is-liked');
        this._api.putLikes(cardId)
          .then((res) => {
            this._element.querySelector('.elements__likes-quantity').textContent = res.likes.length;
          });
        this._isLiked = true;
        return;
      }
      
      if( this._isLiked == true ) {
        this._likeButton.classList.remove('elements__like-button_is-liked');
        this._api.deleteLikes(cardId)
          .then((res) => {
            this._element.querySelector('.elements__likes-quantity').textContent = res.likes.length;
          });
        this._isLiked = false;
        return;
      }

    });
  }

  _getTamlateElement () {
    const itemElement = this._itemTemplate.querySelector('.elements__item').cloneNode(true)
    return itemElement;
  }

  _createDeleteButton () {
    const elementImg = this._element.querySelector('.elements__img');
    const elementButton = document.createElement('button');
    elementButton.classList.add('elements__delete-button');
    elementImg.after(elementButton);
  }

  _setEventListenerDeleteButton () {
    const cardId = this._id;
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      const confirmPopup = new ConfirmationPopup(this._api, this._element, cardId);
      confirmPopup.open();
      confirmPopup.confirmImage();
    });
  }

  _checkOwner () {
    if (this._owner._id == this._myID) {
      this._createDeleteButton ();
      this._setEventListenerDeleteButton ();
    }
  }

  createCard() {    
    this._element = this._getTamlateElement();
    this._likeButton = this._element.querySelector('.elements__like-button');

    this._checkOwner ();

    this._checkMyLikes ();

    this._setEventListeners ();

    this._element.querySelector('.elements__img').src = this._link;
    this._element.querySelector('.elements__img').alt = this._name;
    this._element.querySelector('.elements__title').textContent = this._name;
    this._element.querySelector('.elements__likes-quantity').textContent = this._likes.length;
    
    return this._element;
  }
}