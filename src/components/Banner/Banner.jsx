import React from 'react';
import Button from '../Button/Button'
import './Banner.scss';

export default function Banner() {
  return (
    <section className='banner__wrapper'>
        <div className='banner'>
            <div className='banner__container'>
                <h1 className="banner__headline">Smart Marketing Tools to Grow Your Business</h1>
                <p className="banner__content">Turn more of your visitors into customers. Unbounce is the AI-powered landing page builder with smart features that let you create beautiful, high-performing marketing campaigns in just a few minutes.</p>
                <Button text="Build Landing Pages" fill="btn__outline--peach"/>
                <Button text="Write with AI" fill="btn__outline--yellow"/>
            </div>
        </div>
    </section>
  )
}
