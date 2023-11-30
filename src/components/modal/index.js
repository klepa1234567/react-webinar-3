import React from "react"
import './style.css';
import ModalItem from "../item/modalItem";
import {formatMoney} from "../../utils";

function Modal({closeModal, products,deleteProduct, price}){
  return(
    <div className='block'>
     <div className='informationBlock' >
        <div className='modalHeader'>
          <h2 className='headerTitle' >Корзина</h2>
          <button onClick={closeModal}>Закрыть</button>
        </div>
       <ModalItem deleteProduct={deleteProduct} products={products} />
       {products.length === 0? (
         <p className='noProducts' >Добавьте товар</p>
       ): (
         <div className='finalWrapper'>
           <p className='finalText'>Итого</p>
           <div className='finalPrice'>{formatMoney(price)} ₽</div>
         </div>
       )}
     </div>
      <div onClick={closeModal} className='blockBackground' />
    </div>
  )
}

export default Modal;