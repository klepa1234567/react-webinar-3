import {useParams} from 'react-router-dom'
import useStore from "../../store/use-store";
import {useEffect} from "react";
import useSelector from "../../store/use-selector";
import {numberFormat} from "../../utils";
import './style.css'


function Product({ addToBasket }) {
  const store = useStore();
  const {id} = useParams();

  const { info } = useSelector(state => ({
    info: state.product.info,
  }));

   useEffect(() => {
     store.actions.product.load(id);
   }, []);

  if (info) {
    return (
      <div className="productWrapper">
        <p>{info.description}</p>
        <p>Страна производитель: <b>{info.madeIn.title} ({info.madeIn.code})</b></p>
        <p>Категория: <b>{info.category.title}</b></p>
        <p>Год выпуска: <b>{info.edition}</b></p>
        <b className="productPrice">Цена {numberFormat(info.price)} ₽</b>
        <button onClick={() => addToBasket(id)} className="productButton">Добавить</button>
      </div>
    )
  }

  return 'Загрузка...';
}

export default Product;