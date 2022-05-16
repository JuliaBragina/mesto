import Popup from "./Popup.js";

export class ConfirmationPopup extends Popup {
  constructor (popupSelector) {
    super({popupSelector});
  }
  
  setEventListeners () {
    this._popup.addEventListener('submit', () => {
      super.renderLoading('Удаление...');
      this._deleteHandler()
        .then(() => this.close())
        .finally(() => {
          super.renderLoading('Да');
        });
    });
    super.setEventListeners();
  }

  setHandler(deleteHandler) {
    this._deleteHandler = deleteHandler;
  }
}