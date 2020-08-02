
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/home/index';
import CadastroCategoria from './pages/cadastro/categoria'
import CadastroVideo from './pages/cadastro/video'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria} exact/>
      <Route component={() => (<div>Página não encontrada</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);