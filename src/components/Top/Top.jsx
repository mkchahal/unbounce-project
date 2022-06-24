import React from 'react';
import close from '../../assets/icons/close.svg';
import './Top.scss';

import BouncingText from 'react-bouncing-text';
 

export default function Top({ show, onClose }) {
  
  const topClass = show ? "top" : "top--hidden";

  return (
    <div className={topClass} id="top-notif">
        <p>Unbounce Apps just arrived!&nbsp;
        <a rel="noreferrer" target="_blank" className='top__link' 
            href='https://unbounce.com/product/apps/'>
          <BouncingText
            className="top__link"
            text="Check Out"
            clickable
            hoverable 
            delay={10}
            duration={300}
          />
        </a> this new feature!</p>
        <img src={close} alt="close" className='top__icon' onClick={onClose}/>
    </div>
  )
}
