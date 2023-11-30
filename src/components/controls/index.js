import React, {useState} from "react";
import PropTypes from 'prop-types';
import './style.css';
import Modal from "../modal/index";
import {formatMoney, getNounEnding} from '../../utils'

function Controls({products, price, deleteProduct}) {
  const [modalWindow, setModalWindow] = useState(false)
  const openModal = () =>{
    setModalWindow(true)
  }
  const closeModal = () => {
    setModalWindow(false)
  }
  const sumCont = products.reduce((acc, products) => {
    acc += products.count;
    return acc;
  }, 0);

  return (
    <div className='Controls'>
      <p>В корзине:</p>
      <p className='price' >{products.length === 0 ?'пусто' : `${sumCont} ${getNounEnding(sumCont)} / ${formatMoney(price)}₽`}</p>
      <button onClick={openModal}>Перейти</button>
      {modalWindow && <Modal
        price={price}
        deleteProduct={deleteProduct}
        products={products}
        closeModal={closeModal}
      />}
    </div>
  )
}

export default React.memo(Controls);
