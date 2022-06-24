import React, { useState } from 'react';
import lightLogo from '../../assets/logos/light-logo.svg';
import { FaSistrix, FaAngleDown } from "react-icons/fa";
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import Top from '../Top/Top';
import './Header.scss';

export default function Header() {

    const [showTop, setTop] = useState(true);
    const [dropDown, setDrop] = useState(false);

    return (
        <>
            <Top show={showTop} onClose={() => setTop(false)} />
            <header className='navbar__wrapper'>
                <nav className='navbar'>
                    <div className='navbar--left'>
                        <img src={lightLogo} alt="logo" className='navbar__logo' />
                        <ul className='navbar__links'>
                            <li>Products <FaAngleDown /> </li>
                            <li>Solutions <FaAngleDown /> </li>
                            <li>Pricing</li>
                            <li>Learn <FaAngleDown /> </li>

                            <li 
                                onMouseEnter={() => setDrop(true)} 
                                onMouseLeave={() => setDrop(false)}>
                                    What's New <FaAngleDown /> 
                                    <Modal show={dropDown}/>
                            </li>

                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='navbar__buttons'>
                        <FaSistrix className='navbar__icon' />
                        <Button text="Log In" fill="btn__outline" />
                        <Button text="Start My Free Trial" fill="btn__fill" />
                    </div>
                </nav>
            </header>
        </>
    )
}
