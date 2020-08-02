import React from 'react';
import Menu from '../../components/menu'
import Footer from '../../components/Footer'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'

import data from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div style={{backgroundColor:"#007A68"}}>
      <Menu />
      
      <BannerMain 
        videoTitle="Sekiro: Shadows Die Twice - Official Trailer"
        videoDescription ="Confira o novo trailer de Sekiro!"
        url="https://www.youtube.com/watch?v=4OgoTZXPACo"
      />
      
      { data.categorias.map(item => <Carousel category = {item}/>) }

      <Footer />
    </div>
  );
}

export default Home;