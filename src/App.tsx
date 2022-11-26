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
import FleaMarketList from 'components/fleamarket/FleaMarketList';
import FleaMarketDetail from 'components/fleamarket/FleaMarketDetail';
import AppFormWrite1 from 'components/matching/AppFormWrite1';
import AppFormWrite2 from 'components/matching/AppFormWrite2';
import AppFormWrite3 from 'components/matching/AppFormWrite3';
import QnaComuList from 'pages/community/qna/QnaCommuList';
import QnaCommuDetail from 'pages/community/qna/QnaCommuDetail';
import QnaCommuWrite from 'pages/community/qna/QnaCommuWrite';
import QnaCommuEdit from 'pages/community/qna/QnaCommuEdit';
import TipsCommuList from 'pages/community/tips/TipsCommuList';
import TipsCommuDetail from 'pages/community/tips/TipsCommuDetail';
import TipsCommuEdit from 'pages/community/tips/TipsCommuEdit';
import TipsCommuWrite from 'pages/community/tips/TipsCommuWrite';
import AppFormWrite4 from 'components/matching/AppFormWrite4';
import FleaCalendar from 'pages/fleamarket/FleaCalendar';
import MyPage from 'pages/mypage/MyPage';
import CompanyApplication from 'pages/company/CompanyApplication';
import Promotion from 'pages/company/Promotion';
import CompanyMain from 'pages/CompanyMain';
import ApplicationResult from 'pages/matching/ApplicationResult';
import Calendar from 'pages/fleamarket/Calendar';

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
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/company" element={<CompanyMain />} />

        <Route path="fleamarket/calendar" element={<Calendar />} />
        <Route path="/fleamarket/recommend" element={<FleaMarketList />} />
        <Route path="/fleamarket/:id" element={<FleaMarketDetail />} />

        <Route path="/app" element={<ApplicationForm />} />
        <Route path="/fleamarket/apply/1" element={<AppFormWrite1 />} />
        <Route path="/fleamarket/apply/2" element={<AppFormWrite2 />} />
        <Route path="/fleamarket/apply/3" element={<AppFormWrite3 />} />
        <Route path="/fleamarket/apply/4" element={<AppFormWrite4 />} />

        
        <Route path="/fleamarket/apply/result" element={<ApplicationResult />} />

        <Route path="/login" element={<Login />} />
        <Route path="/regist" element={<RegistForm />} />
        <Route path="/signup/user" element={<MRUserSignup />} />
        <Route path="/signup/user-c" element={<CUserSignup />} />

        <Route path="/community/questions" element={<QnaComuList />} />
        <Route path="/community/questions/:questionBoardId" element={<QnaCommuDetail />} />
        <Route path="/community/questions/:questionBoardId/edit" element={<QnaCommuEdit />} />
        <Route path="/community/questions/write" element={<QnaCommuWrite />} />

        <Route path="/community/tips" element={<TipsCommuList />} />
        <Route path="/community/tips/:tipBoardId" element={<TipsCommuDetail />} />
        <Route path="/community/tips/:tipBoardId/edit" element={<TipsCommuEdit />} />
        <Route path="/community/tips/write" element={<TipsCommuWrite />} />

        <Route path="/fleacalendar" element={<FleaCalendar />} />

        <Route path="/promotion" element={<Promotion />} />

        <Route path="/company/application" element={<CompanyApplication />} />


        <Route path="/mypage" element={<MyPage />} />

      </Routes>
      <Footer />
      </div>
  );
}

export default App;
