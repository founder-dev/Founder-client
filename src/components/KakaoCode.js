import axios from 'axios';

function KaKaoCode() {
  const kakaologin = async () => {
    try {
      const response = await axios.get(
        'https://found-er.co.kr/api/auth/kakao/signin/',

        {
          headers: { 
            'Access-Control-Allow-Origin': '*' 
          }, // 이래도 안됨ㅋ
        }
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  kakaologin();
}

export default KaKaoCode;
