import React from 'react';
import Apps from '../Components/Home/Apps';
import Experiences from '../Components/Home/Experiences';
import FeaturesSec from '../Components/Home/FeaturesSec';
import Footer from '../Components/Home/Footer';
import FreeForever from '../Components/Home/FreeForever';
import Hero from '../Components/Home/Hero';
import Hero2 from '../Components/Home/Hero2';
import Hero3 from '../Components/Home/Hero3';
import Navbar from '../Components/Home/Navbar';
import Tracktime from '../Components/Home/Tracktime';
import Vedio from '../Components/Home/Vedio';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Vedio/>
      <FeaturesSec/>
      <Apps/> 
      <Tracktime/>
      <FreeForever/>
      <Hero3/> 
      <Experiences/> 
      <Hero2/> 
      <Footer/>
    </div>
  )
}

export default Home