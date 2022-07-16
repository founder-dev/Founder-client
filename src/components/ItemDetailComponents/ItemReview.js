import styled from 'styled-components';
import ItemReviewCard from '../ItemDetailComponents/ItemReviewComponents/ItemReviewCard';
import Rated from '../StarRating/Rated';
import RateBars from '../ItemDetailComponents/ItemReviewComponents/RateBars';
import Forward from '../../assets/ItemDetailPageAssets/Forward.png';
import Backward from '../../assets/ItemDetailPageAssets/Backward.png';

function ItemReview() {
  return (
    <>
      <ReviewInfoContainer>
        <OverallRating>
          <Text>총 평점</Text>
          <Average>{4}</Average>
          <Rated rated={4}></Rated>
          <NumText>{`(총 55개의 구매평)`}</NumText>
        </OverallRating>
        <RateBars />
        <PhotoReviewWrapper>
          <PhotoText>사진 후기 모아보기</PhotoText>
          <PhotoWrapper>
            <ForwardButton src={Forward}></ForwardButton>
            <ReviewPreviewPhoto />
            <ReviewPreviewPhoto />
            <ReviewPreviewPhoto />
            <ReviewPreviewPhoto />
            <BackwardButton src={Backward}></BackwardButton>
          </PhotoWrapper>
        </PhotoReviewWrapper>
      </ReviewInfoContainer>
      <ItemReviewCard />
    </>
  );
}

export default ItemReview;

const Text = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
  color: #888888;
`;

const NumText = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
  color: #888888;
  margin-top: 8.09px;
`;

const Average = styled.div`
  margin-top: 10px;
  margin-bottom: 8.52px;
  font-family: 'Pretendard';
  font-weight: 800;
  font-size: 28px;
  color: #007dfe;
`;

const PhotoReviewWrapper = styled.div`
  width: 576px;
  height: 144px;
`;

const PhotoWrapper = styled.div`
  width: 433.35px;
  height: 76.58px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ReviewPreviewPhoto = styled.img`
  margin-top: 15.7px;
  width: 76.58px;
  height: 76.58px;
  margin-right: 8px;
`;

const ReviewInfoContainer = styled.div`
  display: flex;
  margin-left: 260px;
  margin-top: 47px;
`;

const PhotoText = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
  color: #888888;
  margin-bottom: 15.7px;
`;

const OverallRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 117px;
  height: 120.09px;
  margin-right: 57px;
`;

const ForwardButton = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 16.02px;
`;

const BackwardButton = styled.img`
  width: 36px;
  height: 36px;
  margin-left: 7px;
`;
