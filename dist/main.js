/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/FormValidator.js":
/*!**********************************!*\
  !*** ./scripts/FormValidator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormValidator\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar FormValidator = /*#__PURE__*/function () {\n  function FormValidator(objects, form) {\n    _classCallCheck(this, FormValidator);\n\n    this._form = form;\n    this._objects = objects;\n  }\n\n  _createClass(FormValidator, [{\n    key: \"_getErrorElement\",\n    value: function _getErrorElement(inputElement) {\n      var _this$_objects = this._objects,\n          popupSectionSelector = _this$_objects.popupSectionSelector,\n          inputErrorSelector = _this$_objects.inputErrorSelector;\n      return inputElement.closest(popupSectionSelector).querySelector(inputErrorSelector);\n    }\n  }, {\n    key: \"_showError\",\n    value: //Функция, которая добавляет класс с ошибкой\n    function _showError(inputElement, errorMessage) {\n      var _this$_objects2 = this._objects,\n          inputActiveClass = _this$_objects2.inputActiveClass,\n          inputErrorClass = _this$_objects2.inputErrorClass;\n\n      var errorElement = this._getErrorElement(inputElement);\n\n      errorElement.textContent = errorMessage;\n      inputElement.classList.add(inputErrorClass);\n      inputElement.classList.add(inputActiveClass);\n    }\n  }, {\n    key: \"_hideError\",\n    value: // Функция, которая удаляет класс с ошибкой\n    function _hideError(inputElement) {\n      var _this$_objects3 = this._objects,\n          inputActiveClass = _this$_objects3.inputActiveClass,\n          inputErrorClass = _this$_objects3.inputErrorClass;\n\n      var errorElement = this._getErrorElement(inputElement);\n\n      inputElement.classList.remove(inputActiveClass);\n      inputElement.classList.remove(inputErrorClass);\n      errorElement.textContent = \" \";\n    }\n  }, {\n    key: \"_clearInput\",\n    value: function _clearInput(element) {\n      element.classList.remove('popup-item_type_error');\n      element.classList.remove('popup__input-error_active');\n      element.closest('.popup__section').querySelector('.popup__input-error').textContent = \" \";\n    }\n  }, {\n    key: \"clearErrorMessage\",\n    value: function clearErrorMessage() {\n      var _this = this;\n\n      this._inputList.forEach(function (element) {\n        _this._clearInput(element);\n      });\n    }\n  }, {\n    key: \"toggleButtonState\",\n    value: function toggleButtonState() {\n      var inactiveButtonClass = this._objects.inactiveButtonClass;\n\n      var hasInvalidInput = this._inputList.some(function (inputElement) {\n        return !inputElement.validity.valid;\n      });\n\n      if (hasInvalidInput) {\n        this._buttonElement.classList.add(inactiveButtonClass);\n\n        this._buttonElement.setAttribute('disabled', true);\n      } else {\n        this._buttonElement.classList.remove(inactiveButtonClass);\n\n        this._buttonElement.removeAttribute('disabled');\n      }\n    }\n  }, {\n    key: \"_isValid\",\n    value: function _isValid(inputElement) {\n      if (!inputElement.validity.valid) {\n        this._showError(inputElement, inputElement.validationMessage);\n      } else {\n        this._hideError(inputElement);\n      }\n    }\n  }, {\n    key: \"_setEventListeners\",\n    value: function _setEventListeners() {\n      var _this2 = this;\n\n      this._inputList = Array.from(this._form.querySelectorAll(this._objects.popupItemSelector));\n      this._buttonElement = this._form.querySelector(this._objects.submitButtonSelector);\n\n      this._inputList.forEach(function (element) {\n        element.addEventListener(\"input\", function () {\n          _this2._isValid(element);\n\n          _this2.toggleButtonState();\n        });\n      });\n\n      this.toggleButtonState();\n    }\n  }, {\n    key: \"enableValidation\",\n    value: function enableValidation() {\n      this._setEventListeners();\n    }\n  }]);\n\n  return FormValidator;\n}();\n\n//# sourceURL=webpack://yandex.praktikum/./scripts/FormValidator.js?");

/***/ }),

/***/ "./scripts/Сard.js":
/*!*************************!*\
  !*** ./scripts/Сard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Card = /*#__PURE__*/function () {\n  function Card(link, name, cardTemplateElem, handleOpenPopup) {\n    _classCallCheck(this, Card);\n\n    this._itemTemplate = document.querySelector(cardTemplateElem).content;\n    this._link = link;\n    this._name = name;\n    this._handleOpenPopup = handleOpenPopup;\n  }\n\n  _createClass(Card, [{\n    key: \"_setEventListeners\",\n    value: function _setEventListeners() {\n      var _this = this;\n\n      this._itemElement.querySelector('.elements__delete-button').addEventListener('click', function (event) {\n        _this._itemElement.remove();\n      });\n\n      this._itemElement.querySelector('.elements__img').addEventListener('click', this._handleOpenPopup);\n\n      this._likeButton.addEventListener('click', function () {\n        _this._likeButton.classList.toggle('elements__like-button_is-liked');\n      });\n    }\n  }, {\n    key: \"createCard\",\n    value: function createCard() {\n      this._itemElement = this._itemTemplate.querySelector('.elements__item').cloneNode(true);\n      this._cardImage = this._itemElement.querySelector('.elements__img');\n      this._likeButton = this._itemElement.querySelector('.elements__like-button');\n\n      this._setEventListeners();\n\n      this._cardImage.src = this._link;\n      this._cardImage.alt = this._name;\n      this._itemElement.querySelector('.elements__title').textContent = this._name;\n      return this._itemElement;\n    }\n  }]);\n\n  return Card;\n}();\n\n//# sourceURL=webpack://yandex.praktikum/./scripts/%D0%A1ard.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scripts/FormValidator.js */ \"./scripts/FormValidator.js\");\n/* harmony import */ var _scripts_ard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/Сard.js */ \"./scripts/Сard.js\");\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/index.css */ \"./pages/index.css\");\n\n\n //Для формы редактирования \n\nvar popupEdit = document.querySelector('.popup-edit');\nvar popupEditForm = popupEdit.querySelector('.popup-edit__form');\nvar popupEditName = popupEditForm.querySelector('.popup-edit__item_el_name');\nvar popupEditDescr = popupEditForm.querySelector('.popup-edit__item_el_description');\nvar profileEditOpenButton = document.querySelector('.profile__edit-button'); //Для формы добавления карточки \n\nvar popupAdd = document.querySelector('.popup-add');\nvar popupAddForm = document.querySelector('.popup-add__form');\nvar profileAddOpenButton = document.querySelector('.profile__add-button');\nvar popupAddNamePlace = document.querySelector('.popup-add__item_el_name');\nvar popupAddLinkPlace = document.querySelector('.popup-add__item_el_description'); //куда вставлять карточки\n\nvar elementsContainer = document.querySelector('.elements'); //Для формы открытия/закрытия карточки\n\nvar popupImg = document.querySelector('.popup-img');\nvar outputContent = document.querySelector('.content');\nvar nameOutput = outputContent.querySelector('.profile__name');\nvar jobOutput = outputContent.querySelector('.profile__description');\nvar popups = Array.from(document.querySelectorAll('.popup'));\nvar objects = {\n  formSelector: '.popup__form',\n  popupItemSelector: '.popup-item',\n  submitButtonSelector: '.popup-button',\n  inactiveButtonClass: 'popup-button_inactive',\n  inputErrorClass: 'popup-item_type_error',\n  inputActiveClass: 'popup__input-error_active',\n  popupSectionSelector: '.popup__section',\n  inputErrorSelector: '.popup__input-error'\n};\nvar initialCards = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\nvar editCardFormValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__.FormValidator(objects, popupEditForm);\nvar addCardFormValidator = new _scripts_FormValidator_js__WEBPACK_IMPORTED_MODULE_0__.FormValidator(objects, popupAddForm);\naddCardFormValidator.enableValidation();\neditCardFormValidator.enableValidation(); //Функции для открытия и закрытия popup\n\nfunction openPopupForm(popup) {\n  popup.classList.add('popup_is_opened');\n  document.addEventListener('keydown', closeByEscape);\n}\n\n;\n\nfunction closePopupForm(popup) {\n  popup.classList.remove('popup_is_opened');\n  document.removeEventListener('keydown', closeByEscape);\n}\n\n; //Открытие карточки\n\nfunction handleOpenPopup(event) {\n  var itemElement = event.target.closest('.elements__item');\n  var imgElement = itemElement.querySelector('.elements__img');\n  var titleElement = itemElement.querySelector('.elements__title');\n  popupImg.querySelector('.popup-img__img').src = imgElement.src;\n  popupImg.querySelector('.popup-img__description').textContent = titleElement.textContent;\n  popupImg.querySelector('.popup-img__img').alt = titleElement.textContent;\n  openPopupForm(popupImg);\n}\n\n; //Редактирование личной информации\n\nfunction handleProfileFormSubmit() {\n  nameOutput.textContent = popupEditName.value;\n  jobOutput.textContent = popupEditDescr.value;\n  closePopupForm(popupEdit);\n}\n\npopupEditForm.addEventListener('submit', handleProfileFormSubmit);\npopupEditForm.addEventListener('submit', function () {\n  nameOutput.textContent = popupEditName.value;\n  jobOutput.textContent = popupEditDescr.value;\n  closePopupForm(popupEdit);\n}); //Конец редактирования личной информации\n//Добавление карточки\n\nfunction addCard(item) {\n  elementsContainer.prepend(item);\n}\n\n;\n\nfunction handleCardFormSubmit(link, place) {\n  var newCard = new _scripts_ard_js__WEBPACK_IMPORTED_MODULE_1__.Card(link, place, '#elements__item', handleOpenPopup);\n  return newCard.createCard();\n}\n\ninitialCards.forEach(function (item) {\n  addCard(handleCardFormSubmit(item.link, item.name));\n});\npopupAddForm.addEventListener('submit', function () {\n  addCard(handleCardFormSubmit(popupAddLinkPlace.value, popupAddNamePlace.value));\n  closePopupForm(popupAdd);\n}); //Конец добавления карточки \n//Открытие и закрытие карточек\n\nfunction openEditForm() {\n  popupEditName.value = nameOutput.textContent;\n  popupEditDescr.value = jobOutput.textContent;\n  editCardFormValidator.clearErrorMessage();\n  editCardFormValidator.toggleButtonState();\n  openPopupForm(popupEdit);\n}\n\n;\n\nfunction openAddForm() {\n  popupAddForm.reset();\n  addCardFormValidator.clearErrorMessage();\n  addCardFormValidator.toggleButtonState();\n  openPopupForm(popupAdd);\n}\n\n;\nprofileEditOpenButton.addEventListener('click', openEditForm);\nprofileAddOpenButton.addEventListener('click', openAddForm);\n\nvar clickOnButtonOverlay = function clickOnButtonOverlay() {\n  popups.forEach(function (element) {\n    element.addEventListener('click', function (event) {\n      if (event.target.classList.contains('popup_is_opened')) {\n        closePopupForm(element);\n      }\n\n      ;\n\n      if (event.target.classList.contains('popup-close')) {\n        closePopupForm(element);\n      }\n\n      ;\n    });\n  });\n};\n\nfunction closeByEscape(event) {\n  if (event.key === 'Escape') {\n    var popupOpened = document.querySelector('.popup_is_opened');\n    closePopupForm(popupOpened);\n  }\n}\n\nvar canselSending = function canselSending() {\n  var formsList = Array.from(document.querySelectorAll('.popup__form'));\n  formsList.forEach(function (element) {\n    element.addEventListener(\"submit\", function (event) {\n      event.preventDefault();\n    });\n  });\n};\n\nclickOnButtonOverlay();\ncanselSending();\nconsole.log('Hello, World!');\n\n//# sourceURL=webpack://yandex.praktikum/./src/index.js?");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yandex.praktikum/./pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;