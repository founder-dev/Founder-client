import axios from 'axios';

function KaKaoCode (){
   
  const kakaologin = async () => {
    try {
      const response = await axios.post(
        'http://ec2-3-39-168-192.ap-northeast-2.compute.amazonaws.com/api/auth/kakao/signin/'
      );
      console.log(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  
  kakaologin();
}

export default KaKaoCode; 