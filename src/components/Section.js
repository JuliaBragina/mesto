import { Api } from "./Api.js";

//отвечает за отрисовку элементов на странице
export class Section {
  constructor ({items, renderer}, containerSelector) {
    //селектор контейнера, в который нужно добавлять созданные элементы
    this._container = document.querySelector(containerSelector);
    //items — это массив данных, которые нужно добавить на страницу при инициализации класса
    this._items = items;
    //renderer — это функция, которая отвечает за создание и отрисовку данных на странице
    this._renderer = renderer;
  }
  
  //метод, который отвечает за отрисовку всех элементов
  renderCards () {
   this._items.forEach((item) => {
    this._renderer(item);
   });
  }
  
  addItem (item) {
    this._container.prepend(item);
  }
}

