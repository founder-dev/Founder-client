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

function App() {
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
        <Route path="/brandstory" element={<MagazineDetailPage />} />
        <Route
          path="/itemdetail/:title/:product"
          element={<ItemDetailPage />}
        />
        <Route path="/branddetail" element={<BrandDetailPage />} />
      </Routes>
    </>
  );
}

/* 카카오 로그인 버튼 공식 디자인
const KakaoBtn=styled(KakaoLogin)`
    padding: 0;
    width: 190px;
    height: 44px;
    line-height: 44px;
    color: #783c00;
    background-color: #FFEB00;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
    }
*/

export default App;
