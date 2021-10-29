import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers';
import GlobalStyle from "./styles/global";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root')
);