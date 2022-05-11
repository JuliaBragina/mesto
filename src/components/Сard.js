import { ConfirmationPopup } from "./ConfirmationPopup.js";
import { Api } from "./Api.js";

export class Card {
  constructor ({data, cardTemplateElem, handleCardClick}) {
    this._itemTemplate = document.querySelector(cardTemplateElem).content;
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._isLiked = false;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners () {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
    const confirmPopup = new ConfirmationPopup(() => {
      this._element.remove();
    });
    confirmPopup.open();
    });

    this._element.querySelector('.elements__img').addEventListener('click', () => {
      this._handleCardClick({
        link: this._link,
        name: this._name});
    });

    this._likeButton.addEventListener('click', () => {
      const cardId = this._id;
      const api = new Api({
        url: `https://mesto.nomoreparties.co/v1/cohort-40/cards/${cardId}/likes`,
        headers: {
          authorization: '5907e0a2-56a3-4cfa-b788-58e2a6027744', //Идентификатор группы: cohort-40
          "Content-Type": "application/json"
       }
      });

      if( this._isLiked == false ){
        this._likeButton.classList.toggle('elements__like-button_is-liked');
        api.putLikes();
        this._isLiked = true;
        return;
      }
      
      if( this._isLiked == true ){
        this._likeButton.classList.toggle('elements__like-button_is-liked');
        api.deleteLikes();
        this._isLiked = false;
        return;
      }

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
    this._element.querySelector('.elements__likes-quantity').textContent = this._likes.length;
    
    return this._element;
  }
}