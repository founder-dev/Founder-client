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
import { KakaoRefresh } from './components/SharedComponents/RefreshToken';
import axios from 'axios';

function App() {
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
