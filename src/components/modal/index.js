import React from "react"
import './style.css';
import ModalItem from "../item/modalItem";
import {formatMoney} from "../../utils";
import Modal from "../../ui/modal";
import PropTypes from "prop-types";

function CartModal({closeModal, products,deleteProduct, price}){
  return(
   <Modal closeModal={closeModal} title='Корзина'>
       <ModalItem  deleteProduct={deleteProduct} products={products} />
       {products.length === 0? (
         <p className='noProducts' >Добавьте товар</p>
       ): (
         <div className='finalWrapper'>
           <p className='finalText'>Итого</p>
           <div className='finalPrice'>{formatMoney(price)} ₽</div>
         </div>
       )}
   </Modal>
  )
}

CartModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  })).isRequired,
}

export default CartModal;