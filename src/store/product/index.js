import StoreModule from "../module";

class Product extends StoreModule {

  constructor(store, name) {
    super(store, name);
  }

  initState() {
    return {
      info: null
    }
  }

  load = async (id) => {
    const response = await fetch(`/api/v1/articles/${id}?fields=*,madeIn(title,code),category(title)`);
    const json = await response.json();

    this.setState({
      ...this.getState(),
      info: json.result
     }, 'Загружены товары из АПИ');
  }
}

export default Product;
