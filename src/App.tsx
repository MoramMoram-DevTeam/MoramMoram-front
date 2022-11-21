import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import './reset.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Main from 'pages/Main';
import ApplicationForm from 'pages/matching/ApplicationForm';
import CommunityDetail from 'components/community/CommunityDetail';
import CommunityWriting from 'components/community/CommunityWriting';
import CommunityList from 'components/community/CommunityList';
import CommunityEdit from 'components/community/CommunityEdit';
import Login from 'pages/user/Login';
import RegistForm from 'pages/user/regist/RegistForm';
import MRUserSignup from 'pages/user/regist/MRUserSignup';
import CUserSignup from 'pages/user/regist/CUserSignup';
import "./lib/Refresh";
import ReactGA from 'react-ga';
import { createBrowserHistory } from "history";
import setAuthorizationToken from 'pages/user/setAuthorizationToken';
import FleaMarketList from 'components/fleamarket/FleaMarketList';
import FleaMarketDetail from 'components/fleamarket/FleaMarketDetail';

export const history = createBrowserHistory();
ReactGA.event({
  category: 'User',
  action: 'Created an Account'
});
ReactGA.exception({
  description: 'An error ocurred',
  fatal: true
});


function App() {

  const [isLogin, setIsLogin] = useState(false); 

  function loginCallback(login: any) {
    setIsLogin(login);
  }

  useEffect(() => {
      ReactGA.initialize("G-69K8R7DY5S");
      history.listen((location: any) => {
        ReactGA.set({ page: location.pathname }); // Update the user's current page
        ReactGA.pageview(location.pathname); // Record a pageview for the given page
      });
},[]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/fleamarket" element={<FleaMarketList />} />
        <Route path="/fleamarket/:id" element={<FleaMarketDetail />} />

        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<RegistForm />} />
        <Route path="/signup/user" element={<MRUserSignup />} />
        <Route path="/signup/user-c" element={<CUserSignup />} />
        <Route path="/app" element={<ApplicationForm />} />
        <Route path="/community/list" element={<CommunityList />} />
        <Route path="/community/:questionBoardId/edit" element={<CommunityEdit />} />
        <Route path="/community/:questionBoardId" element={<CommunityDetail />} />
        <Route path="/community-write" element={<CommunityWriting />} />

      </Routes>
      <Footer />
      </BrowserRouter>
  );
}

export default App;
