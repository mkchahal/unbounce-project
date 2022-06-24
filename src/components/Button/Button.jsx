import React from 'react';
import './Button.scss';

export default function Button({ text, fill}) {
  return (
    <button className={`btn ${fill}`}>
        {text}
    </button>
  )
}
