import MainPage from './pages/MainPage';
import MagazinePage from './pages/MagazinePage';
import MagazineDetailPage from './pages/MagazineDetailPage';
import ItemDetailPage from './pages/ItemDetailPage';
import MyPage from './pages/MyPage';
import { Routes, Route } from 'react-router-dom';
import KaKaoLoginHandlerPage from './pages/KakaoLoginHandlerPage';
import CategoryIntroPage from './pages/CategoryIntroPage';
import SurveyPage from './pages/SurveyPage';
import SurveyIntroPage from './pages/SurveyIntroPage';
import BrandDetailPage from './pages/BrandDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import axios from 'axios';

function App() {
  
  const KakaoRefresh = async () => {
    try {
      const response = await axios.post(
        'https://api.found-er.co.kr/api/token/refresh',
        { refresh: `${localStorage.getItem('refreshtoken')}` }
      );
      console.log(response.data);
      console.log('리프레쉬 성공');
  
      localStorage.setItem('accesstoken', response.data.access);
      localStorage.setItem('refreshtoken', response.data.refresh);
      setTimeout(KakaoRefresh, 1000 * 60 * 4);
    } catch (e) {
      console.log(e);
      console.log('리프레쉬 불가');
    }
  
    
  };
  // checkAccessToken(localStorage.refreshtoken);

  //setInterval(KakaoRefresh, 1000 * 60 * 4);

  /*axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        localStorage.clear();
      }
      return Promise.reject(error);
    }
  );*/

  if (performance.navigation.type===1){
    //새로고침하면 바로 로그인 연장(토큰 갱신)
    if(localStorage.accesstoken)
    KakaoRefresh();
  }

  return (
    <>
      <Routes>
        <Route path="/kakao" element={<KaKaoLoginHandlerPage />} />

        <Route path="/" element={<MainPage />} />

        <Route path="/mypage" element={<MyPage />} />
        <Route path="/magazinepage" element={<MagazinePage />} />
        <Route path="/surveyintropage" element={<SurveyIntroPage />} />
        <Route path="/surveypage" element={<SurveyPage />} />
        <Route path="/food" element={<CategoryIntroPage title={'food'} />} />
        <Route
          path="/beverage"
          element={<CategoryIntroPage title={'beverage'} />}
        />
        <Route
          path="/health"
          element={<CategoryIntroPage title={'health'} />}
        />
        <Route path="/goods" element={<CategoryIntroPage title={'goods'} />} />
        <Route path="/brandstory/:id" element={<MagazineDetailPage />} />
        <Route
          path="/itemdetail/:title/:product/:id"
          element={<ItemDetailPage />}
        />
        <Route path="/branddetail/:id" element={<BrandDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
