import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './lib/globalstyle';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ScrollToTop />
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
