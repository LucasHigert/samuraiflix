import React from 'react';
import Menu from './components/menu/index';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <BannerMain></BannerMain>
      <Carousel></Carousel>
      <Footer></Footer>
    </div>
  );
}

export default App;
