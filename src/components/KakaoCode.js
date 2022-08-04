import axios from 'axios';
import { loginState } from '../recoil';

function KaKaoCode() {
  const kakaologin = async () => {
    try {
      const response = await axios.get(
        'https://found-er.co.kr/api/auth/kakao/signin/callback'
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  kakaologin();
}

export default KaKaoCode;
