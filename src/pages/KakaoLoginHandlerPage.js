import axios from 'axios';

function KaKaoLoginHandlerPage() {
  var code = new URL(window.location.href).searchParams.get('code');

  /*const kakaologin = async () => {
        try {
          const response = await axios.get(
            `https://found-er.co.kr/api/auth/kakao/signin/callback?code=${code}`
          );
          console.log(response.data);
          console.log("로그인 성공");
        } catch (e) {
          console.log(e);
          console.log("로그인 불가");
        }
      };
    
      kakaologin();*/

  return (
    <>
      <div>{code}</div>
      <div>카카오리다이렉트입니다</div>
    </>
    //axios 통신을 통해 인가코드 넘겨주기
  );
}

export default KaKaoLoginHandlerPage;
