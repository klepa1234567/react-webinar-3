import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {formatMoney} from "../../utils";

function Item({item,addProduct}) {
  const onclick = () => {
    addProduct(item)
  }

  return (
    <div className='Item'>
      <div className='Item-code'>{item.code}</div>
      <div className='Item-title'>
        {item.title}
      </div>
      <div className='Item-actions'>
        <p className='Item-price' >{formatMoney(item.price)} ₽</p>
        <button onClick={onclick}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default React.memo(Item);
