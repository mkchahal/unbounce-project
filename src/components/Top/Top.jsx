import React from 'react';
import close from '../../assets/icons/close.svg';
import './Top.scss';

export default function Top({ show, onClose }) {

    const topClass = show ? "top" : "top--hidden";

  return (
    <div className={topClass} id="top-notif">
        <p>Unbounce Apps just arrived! <a className='top__link' href='/'>Check out </a>this new feature!</p>
        <img src={close} alt="close" className='top__icon' onClick={onClose}/>
    </div>
  )
}
