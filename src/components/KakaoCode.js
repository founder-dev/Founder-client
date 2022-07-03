function KaKaoCode (){
        window.Kakao.Auth.authorize({
          redirectUri: 'http://localhost:3000/kakao'
        })
}

export default KaKaoCode; 