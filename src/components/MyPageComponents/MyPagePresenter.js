import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction : column;
  width: 1440px;
  justify-content: space-between;
  padding-top : 150px;
  
`;

export const WidthWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-left : 480px;
`;

export const Name = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  display: flex;

  padding-top: 67px;
  text-align : center;
`;

export const MyName = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  padding-bottom : 40px;
  display: flex;
  padding-top : 66px;

`;

export const Border = styled.div`
   border: 0.5px solid #222222;
   width : 480px;
`

export const Info = styled.div`
   display : flex;
   flex-direction : row;
   margin-bottom : 8px;

`;
export const Id = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;

  width : ${props => props.width || '52px'};
  margin-right : 52px;

`;

export const MyId = styled.span`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 36px;

`;

export const Button = styled.button`
  box-sizing: border-box;
  border: 1.5px solid #000000;
  border-radius: 4px;
  background-color : white;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  margin-top : 132px;
  width : 480px;
  height : 60px;

  cursor : pointer;

`;
export const Logo = styled.img`
   width : 480px;
   margin-top : 30px;
`;

export const Login = styled.div`
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
/* identical to box height, or 133% */

  display: flex;
  align-items: center;

  margin-top : 7px;
`;

export const Illustration = styled.img`
  width : 248px;
  height : 230px;

  margin-left : 200px;
`;

export const KaKaoButton = styled.button`
  padding: 0;
  width: 300px;
  height: 44px;
  line-height: 44px;
  background-color : white;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover{
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2)
   }
  margin-top : 184px;
  margin-left : 70px;
`;