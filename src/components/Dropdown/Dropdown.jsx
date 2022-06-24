import React from 'react';
import './Dropdown.scss';
import Beta from '../../assets/icons/beta-tag-icon.svg';
import SmartBuilder from '../../assets/icons/monitor-smartbuilder-icon.svg'
import Gif from '../../assets/icons/Apps4All.gif';
import New  from '../../assets/icons/new-tag-icon.svg'
import SmartCopy from '../../assets/icons/line-wand-smart-copy-icon.svg';
import App  from '../../assets/icons/puzzle-unbounce-apps-icon.svg'

export default function Dropdown(){
    return (
        <section className='dropdrown'>     
            <div className='dropdrown__container'>
                <div className='dropdrown__description'>
                    <h2 className='dropdrown__title--padding'>New Fetures</h2>
                    <p className='dropdrown__paragraph'>Learn about our lastest features and updates.</p>
                </div>
                <div className='dropdrown__box'>
                    <img className='dropdrown__icon'src={SmartBuilder} alt={'smartBuilder'}></img>
                    <h1 className='dropdrown__title'>Smart Builder</h1>
                </div>
                <div className='dropdrown__box--padding'>
                    <img className='dropdrown__tag' src={Beta} alt={'beta'}></img>
                    <a href='https://documentation.unbounce.com/hc/en-us/categories/4403206140436?_ga=2.266915022.1947046721.1656022238-170502297.1655768346' className='dropdrown__btn'>Learn More</a>
                </div>
                <div className='dropdrown__box'>
                    <img className='dropdrown__icon'src={SmartCopy} alt={'smartBuilder'}></img>
                    <h1 className='dropdrown__title'>Smart Copy</h1>
                </div>
                <div className='dropdrown__box--padding'>
                    <img className='dropdrown__tag' src={New} alt={'beta'}></img>
                    <a href='https://documentation.unbounce.com/hc/en-us/categories/4406903492372-Working-with-Smart-Copy-?_ga=2.31573630.1947046721.1656022238-170502297.1655768346' className='dropdrown__btn'>Learn More</a>
                </div>
                <div className='dropdrown__box'>
                    <img className='dropdrown__icon'src={App} alt={'smartBuilder'}></img>
                    <h1 className='dropdrown__title'>Unbounce Apps</h1>
                </div>
                <div className='dropdrown__box--padding'>
                    <img className='dropdrown__tag' src={New} alt={'beta'}></img>
                    <a href='https://documentation.unbounce.com/hc/en-us/categories/4417905900564-Unbounce-Apps?_ga=2.61048428.1947046721.1656022238-170502297.1655768346' className='dropdrown__btn'>Learn More</a>
                </div>
            </div>
            <div className='dropdrown__container--invisible'>
                <h2 className='dropdrown__title--padding'>Unbounce Apps</h2>
                <p className='dropdrown__paragraph'>Explore resources to help you build higher-converting landing pages and grow your business.</p>
                <div className='dropdrown__app-container'>
                    <a href='"https://documentation.unbounce.com/hc/en-us/categories/4417905900564-Unbounce-Apps' className='dropdrown__btn--large'>Documentation</a>
                    <img className='dropdrown__gif'src={Gif} alt={'Git'}></img>
                </div>    
            </div>
        </section>
    )
}