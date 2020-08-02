import React from 'react';
import Menu from '../../components/Menu/index'
import Footer from '../../components/Footer'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import data from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{backgroundColor:"#007A68"}}>
      <Menu />
      
      <BannerMain 
        videoTitle="Ghost of Tsushima"
        videoDescription ="Ghost of Tsushima - Trailer da História "
        url="https://www.youtube.com/watch?v=7WzKdFjRoWE&has_verified=1"
      />
      
      { data.categorias.map(item => <Carousel category = {item}/>) }

      <Footer />
    </div>
  );
}

export default Home;