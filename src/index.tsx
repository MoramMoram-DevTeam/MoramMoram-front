import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import App from './App';
import setAuthorizationToken from 'pages/user/setAuthorizationToken';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

console.log(process.env.NODE_ENV);
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'http://13.124.85.159:8080';
axios.defaults. withCredentials = true;
setAuthorizationToken(localStorage.getItem('atk'));

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <RecoilRoot>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </RecoilRoot>  
);
