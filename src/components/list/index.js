import React from "react";
import PropTypes from 'prop-types';
import Item from "../item/mainItem";
import './style.css';

function List({list, addProduct}) {
  return (
    <div className='List'>
      {list.map(item =>
        <div key={item.code} className='List-item'>
          <Item addProduct={addProduct} item={item} />
        </div>
      )}
    </div>
  )
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    selected: PropTypes.bool,
    count: PropTypes.number
  })).isRequired,
  addProduct: PropTypes.func.isRequired
};

export default React.memo(List);
