import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './lib/globalstyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
    <BrowserRouter>
    <GlobalStyle/>
    <App />
    </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);
