function KaKaoLoginHandlerPage(){
    
    var code = new URL(window.location.href).searchParams.get("code");
    return(
        <>
        <div>{code}</div>
        </>
    //axios 통신을 통해 인가코드 넘겨주기
   )
}

export default KaKaoLoginHandlerPage;