import {element, number} from "prop-types";

/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.products = [];
    this.price = 0;
    this.count = 0;
  }

  notify = () => {
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }
  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  addProduct = (code) => {
    const thereProductCart = this.products.find((value) => value.code === code)
    const matchingElement = this.state.list.find((element) => element.code === code)

    if(thereProductCart){
      const arrProduct = this.products.map((value) => {
        if(value.code === code){
          return  {...value, count: value.count + 1 }
        }
        return value
      })
       this.products = arrProduct;
    } else {
      this.products = [...this.products, {...matchingElement, count: 1}];
    }
    this.price = this.price + matchingElement.price;
    this.count = this.count + 1;
    this.notify()
  }

  deleteProduct = (code) => {
    const thereProductCart = this.products.find((value) => value.code === code)
    this.price = this.price - thereProductCart.price;
    this.count = this.count - 1;
    if(thereProductCart.count === 1){
      const arrFilter = this.products.filter((value) =>  value.code !== thereProductCart.code )
      this.products = arrFilter
    } else {
      const newProducts = this.products.map((value) => {
        if(value.code === thereProductCart.code){
          return {...value, count: value.count - 1}
        }
        return value
      })
      this.products = newProducts;
    }

    this.notify()
  }

}

export default Store;
