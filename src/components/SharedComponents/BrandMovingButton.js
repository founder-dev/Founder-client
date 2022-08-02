import styled from 'styled-components';
import Arrow from '../../assets/MagazineDetailPageAssets/Arrow.png';
import Logo from '../../assets/MagazineDetailPageAssets/Logo.png';

const BrandMovingButton = ({ data, top, left }) => {
  const desc = String(data.brand_desc).split('.');
  
  return (
    <BrandHome top={top} left={left}>
      <BrandInfoWrapper>
        <BrandLogo src={data.brand_img_logo} />
        <TextWrapper>
          <BrandName>{`${data.brand_name} (${data.brand_name_eng})`}</BrandName>
          <BrandDetail>
            {desc[1]}
          </BrandDetail>
        </TextWrapper>
      </BrandInfoWrapper>

      <BrandButton>
        <ButtonText>브랜드 홈 방문하기</ButtonText>
        <BrandArrow src={Arrow} />
      </BrandButton>
    </BrandHome>
  );
};

export default BrandMovingButton;

const BrandHome = styled.div`
  position: relative;
  width: 920px;
  height: 80px;

  margin-top: ${(props) => props.top || '80px'};
  margin-bottom: 136px;

  background: #fafafa;
  border-radius: 4px;

  display: flex;
  justify-content: space-between;
  margin-left: ${(props) => props.left || '260px'};
  margin-right: 260px;

  padding-bottom: 20px;
`;
const BrandInfoWrapper = styled.div`
  position: relative;
  margin-bottom: 72px;
`;

const BrandLogo = styled.img`
  margin: 20px 32px 0px 32px;
  position: absolute;
  width: 70px;
  height: 70px;
`;

const TextWrapper = styled.div`
  position: absolute;
  align-items: column;
  width: 683px;
  left: 160px;
`;

const BrandName = styled.div`
  font-weight: 700;
  font-size: 20px;
  height: 30px;
  margin-top: 20px;
  line-height: 31px;
`;

const BrandDetail = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 30px;
  height: 36px;
  line-height: 28px;
`;

const ButtonText = styled.div`
  font-weight: 500;
  font-size: 12px;
  margin: 13px 21.01px 13px;
`;

const BrandArrow = styled.img`
  margin-right: 10px;
`;

const BrandButton = styled.div`
  width: 180px;
  height: 37px;
  position: absolute;
  top: 40px;
  left: 700px;
  border-radius: 4px;
  border: 1px solid #222222;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
`;
