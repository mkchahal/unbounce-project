import './Modal.scss';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';

export default function Modal({ title, content, show }) {

    if (!show) {
        return null
    }

    return (
        <div className="modal__window">
            <Dropdown/>
        </div>
    )
}
