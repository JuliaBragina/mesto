export default class Popup {
  constructor ({popupSelector}){
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
    this._popupButton = this._popup.querySelector('.popup-button');
  }

  //логику закрытия попапа клавишей Esc
  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  //добавляет слушатель клика иконке закрытия попапа
  setEventListeners () {
    this._popup.addEventListener('mousedown', (event) => {
      if(event.target.classList.contains('popup_is_opened')){ 
        this.close();
        };
      if(event.target.classList.contains('popup-close')){ 
        this.close();
        };
      });
    }

  renderLoading (text) {
    this._popupButton.textContent = text;
  }

  //отвечают за открытие и закрытие попапа
  close () {
    this._popup.classList.remove('popup_is_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  
  open () {
    this._popup.classList.add('popup_is_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }
}

