import MainPage from './pages/MainPage';
import MagazinePage from './pages/MagazinePage';
import MagazineDetailPage from './pages/MagazineDetailPage';
import ItemDetailPage from './pages/ItemDetailPage';
import MyPage from './pages/MyPage';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <MyPage />
    </RecoilRoot>
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
