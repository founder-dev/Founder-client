import styled from 'styled-components';
import ItemReviewCard from '../ItemDetailComponents/ItemReviewComponents/ItemReviewCard';
import Rated from '../StarRating/Rated';
import RateBars from '../ItemDetailComponents/ItemReviewComponents/RateBars';
import Forward from '../../assets/ItemDetailPageAssets/Forward.png';
import Backward from '../../assets/ItemDetailPageAssets/Backward.png';

function ItemReview() {
  return (
    <ItemReviewWrapper>
      <ReviewInfoContainer>
        <OverallRating>
          <Text>총 평점</Text>
          <AlignCenter>
            <Average>{4}</Average>
            <Rated rating={4}></Rated>
            <NumText>{`(총 55개의 구매평)`}</NumText>
          </AlignCenter>
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
      <ItemReviewCardGrid>
        <ItemReviewCard />
      </ItemReviewCardGrid>
    </ItemReviewWrapper>
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

  width: 117px;
  height: 120.09px;
  margin-right: 57px;
`;

const AlignCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const ItemReviewCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 56px;
  row-gap: 54px;
`;

const ItemReviewWrapper = styled.div`
  margin-left: 261px;
  margin-bottom: 84.07px;
`;
