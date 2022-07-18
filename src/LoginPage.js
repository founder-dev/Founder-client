function LoginPage (){
    
    function kakaoLogin(){
        window.Kakao.Auth.authorize({
          redirectUri: 'http://localhost:3000/kakao'
        })
      }

     return(
        <>
        <button onClick={kakaoLogin}>카카오로그인</button>
        </>
     )
}

export default LoginPage;