function KaKaoLoginHandlerPage(){
    
    var code = new URL(window.location.href).searchParams.get("code");
    return(
        <>
        <div>{code}</div>
        <div>카카오리다이렉트입니다</div>
        </>
    //axios 통신을 통해 인가코드 넘겨주기
   )
}

export default KaKaoLoginHandlerPage;