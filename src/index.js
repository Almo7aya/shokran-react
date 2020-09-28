import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.scss';
import Farmer from './views/Farmer';
import Vendor from './views/Vendor';
import Client from './views/Client';

const App = () => (
  <div className="main_container">
    <BrowserRouter>
      <Route path="/" exact render={() => (<h1>index</h1>)} />
      <Route path="/farmer" component={Farmer} />
      <Route path="/vender" component={Vendor} />
      <Route path="/clinet" component={Client} />
    </BrowserRouter>
  </div>
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
