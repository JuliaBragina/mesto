import Popup from "./Popup.js";

export class ConfirmationPopup extends Popup {
  constructor (popupSelector) {
    super({popupSelector});
  }
  
  setEventListeners () {
    this._popup.addEventListener('submit', () => {
      super.renderLoading(true, 'Удаление...');
      this._deleteHandler()
        .finally(() => {
          super.close();
          super.renderLoading(false, 'Да');
        });
    });
    super.setEventListeners();
  }

  setHandler(deleteHandler) {
    this._deleteHandler = deleteHandler;
  }
}