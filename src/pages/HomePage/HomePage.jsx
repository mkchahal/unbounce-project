import React from 'react';
import './HomePage.scss';
import Header from '../../components/Header/Header';
import banner from '../../assets/images/banner.png';
import Banner from '../../components/Banner/Banner';

export default function HomePage() {
  return (
    <>
      <Header />
      <Banner/>
      <div className='wrapper'><img src={banner} alt="" /></div>
    </>
  )
}
