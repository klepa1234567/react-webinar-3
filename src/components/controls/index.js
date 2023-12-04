import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {formatMoney, getNounEnding} from '../../utils'

function Controls({price, counter,openModal}) {

  const text = counter === 0
    ? 'пусто'
    : `${counter} ${getNounEnding(counter)} / ${formatMoney(price)} ₽`;

  return (
    <div className='controls'>
      <p>В корзине:</p>
      <p className='price'>{text}</p>
      <button onClick={openModal}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  openModal: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  counter: PropTypes.number.isRequired,
}

export default React.memo(Controls);
