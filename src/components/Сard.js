export class Card {
  constructor ({data, cardTemplateElem, handleCardClick, handleSubmitClick}, api, userId) {
    this._itemTemplate = document.querySelector(cardTemplateElem).content;
    this._elementButton = document.createElement('button');
    this._link = data.link;
    this._name = data.name;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._isLiked = false;
    this._handleCardClick = handleCardClick;
    this._handleSubmitClick = handleSubmitClick;
    this._api = api;
    this._myID = userId;
  }

  _checkMyLikes () {
    for(let i = 0; i <= this._likes.length - 1; i++) {
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
          })
          .catch((err) => alert(err));
        this._isLiked = true;
        return;
      }
      
      if( this._isLiked == true ) {
        this._likeButton.classList.remove('elements__like-button_is-liked');
        this._api.deleteLikes(cardId)
          .then((res) => {
            this._element.querySelector('.elements__likes-quantity').textContent = res.likes.length;
          })
          .catch((err) => alert(err));
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
    this._elementImg = this._element.querySelector('.elements__img');
    this._elementButton.classList.add('elements__delete-button');
    this._elementImg.after(this._elementButton);
  }

  _setEventListenerDeleteButton () {
    this._element.querySelector('.elements__delete-button').addEventListener('click', () => {
      this._handleSubmitClick(() => {
        return this._api.deletCard(this._id)
          .then(() => this._element.remove())
          .catch((err) => alert(err));
        });
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