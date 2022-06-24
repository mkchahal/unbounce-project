import './Modal.scss';
import React from 'react';

export default function Modal({ title, content, show }) {

    if (!show) {
        return null
    }

    return (
        <div className="modal__window">
            <div>
                <a href="https://google.com" rel="noreferrer" target="_blank"><h1 className='modal__title'>{title}</h1></a>
                <p className="modal__content">{content}</p>
            </div>
        </div>
    )
}
