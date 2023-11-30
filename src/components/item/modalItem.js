import React from "react";
import PropTypes from "prop-types";
import './style.css';
import {formatMoney} from "../../utils";

function ModalItem({ products,deleteProduct}) {
  if(products.length === 0){
    return null
  }

  return (
    <div className='modalItemContainer'>
      {products.map((value)=>{
        return (
           <div key={`${value.code}model`} className='List-item'>
              <div  className='Item'>
                <div className='Item-code'>{value.code}</div>
                <div className='Item-title'>
                  {value.title}
                </div>
                <div className='Item-actions'>
                  <p className='Item-price'>{formatMoney(value.price)} ₽</p>
                  <p className='Item-count' >{value.count} шт</p>
                  <button onClick={ () => deleteProduct(value)}>
                    Удалить
                  </button>
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
}

ModalItem.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  deleteProduct: PropTypes.func.isRequired,
};

export default React.memo(ModalItem);
