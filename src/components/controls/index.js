import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {formatMoney, getNounEnding} from '../../utils'

function Controls({products, price, counter,openModal}) {

  const text = products.length === 0
    ? 'пусто'
    : `${counter} ${getNounEnding(counter)} / ${formatMoney(price)}₽`;

  return (
    <div className='Controls'>
      <p>В корзине:</p>
      <p className='price' >{text}</p>
      <button onClick={openModal}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  openModal: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  })).isRequired,
}

export default React.memo(Controls);
