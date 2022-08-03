import axios from 'axios';
import { loginState } from '../recoil';
import { useRecoilState } from 'recoil';

function KaKaoCode() {
  //const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);

  const kakaologin = async () => {
    try {
      const response = await axios.get(
        'https://found-er.co.kr/api/auth/kakao/signin',

        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          }, // 이래도 안됨ㅋ
        }
      );
      console.log(response);
      //setIsLoggedIn(true);
    } catch (e) {
      console.log(e);
    }
  };

  kakaologin();
}

export default KaKaoCode;
