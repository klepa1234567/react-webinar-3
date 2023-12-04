import React from "react"
import { createPortal } from 'react-dom'
import './style.css';
import PropTypes from "prop-types";

function Modal({closeModal, title, children}){
  return createPortal(
    <div className='block'>
      <div className='informationBlock' >
        <div className='modalHeader'>
          <h2 className='headerTitle'>{title}</h2>
          <button onClick={closeModal}>Закрыть</button>
        </div>
        {children}
      </div>
      <div onClick={closeModal} className='blockBackground' />
    </div>,
    document.body
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;
