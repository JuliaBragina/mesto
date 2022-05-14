export default class Popup {
  constructor ({popupSelector}){
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(this._popupSelector);
  }

  //логику закрытия попапа клавишей Esc
  _handleEscClose = (event) => {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  //добавляет слушатель клика иконке закрытия попапа
  setEventListeners () {
    this._popup.addEventListener('click', (event) => {
      if(event.target.classList.contains('popup_is_opened')){ 
        console.log('click');  
        this.close();
        };
      if(event.target.classList.contains('popup-close')){ 
        console.log('click');  
        this.close();
        };
      });
    }

  renderLoading (isLoading, text) {
    if(isLoading) {
      this._popup.querySelector('.popup-button').textContent = text;
    } else {
      this._popup.querySelector('.popup-button').textContent = text;
    }
  }

  //отвечают за открытие и закрытие попапа
  close () {
    this._popup.classList.remove('popup_is_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  
  open () {
    this._popup.classList.add('popup_is_opened');
    //console.log(this._popup);
    document.addEventListener('keydown', this._handleEscClose);
  }
}

