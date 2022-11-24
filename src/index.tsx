import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import App from './App';
import setAuthorizationToken from 'pages/user/setAuthorizationToken';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from 'lib/ScrollToTop';


setAuthorizationToken(localStorage.getItem('atk'));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <RecoilRoot>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </RecoilRoot>  
);
