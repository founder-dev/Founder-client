import { useState, useRef ,useEffect } from 'react';
import styled from 'styled-components';
import ItemReviewCard from '../ItemDetailComponents/ItemReviewComponents/ItemReviewCard';
import Rated from '../StarRating/Rated';
import RateBars from '../ItemDetailComponents/ItemReviewComponents/RateBars';
import Slider from './Slider';
import Review from '../../assets/json/Review.json';
import NotFoundImage from '../../assets/ItemDetailPageAssets/NotFoundImage.png';
import { fetchItemReview } from '../../API';

function ItemReview({id}) {
  const reviewData = Review;
  const [itemReview, setItemReview] = useState(null);
  
  /*useEffect(() => {
    fetchItemReview({setItemReview,id});
  }, [id]);

  if (!itemReview) return null;
  console.log(itemReview);*/

  return (
    <>
      {reviewData == null ? (
        <>
          <NotFound src={NotFoundImage} />
          <NotFoundText>아직 작성된 후기가 없어요ㅠㅠ</NotFoundText>
        </>
      ) : (
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
              <Slider />
            </PhotoReviewWrapper>
          </ReviewInfoContainer>
          <ItemReviewCardGrid>
            {reviewData.map(
              ({ id, review_id, review_text, review_tag_arr, create_date }) => (
                <ItemReviewCard
                  key={id}
                  text={review_text}
                  id={review_id}
                  tag={review_tag_arr}
                  date={create_date}
                />
              )
            )}
          </ItemReviewCardGrid>
        </ItemReviewWrapper>
      )}
    </>
  );
}

export default ItemReview;

const NotFound = styled.img`
  margin-top: 68.61px;
  margin-bottom: 27px;
`;

const NotFoundText = styled.text`
  font-weight: 700;
  font-size: 20px;
  line-height: 31px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #888888;
`;

const NumText = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #888888;
  margin-top: 8.09px;
`;

const Average = styled.div`
  margin-top: 10px;
  margin-bottom: 8.52px;
  font-weight: 800;
  font-size: 28px;
  color: #007dfe;
`;

const PhotoReviewWrapper = styled.div`
  width: 576px;
  height: 144px;
`;

const ReviewInfoContainer = styled.div`
  display: flex;
  margin-top: 47px;
`;

const PhotoText = styled.div`
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

const ItemReviewCardGrid = styled.div`
  column-count: 2;
  column-gap: 1em;
  width: 918px;
  margin-top: 72px;
  background-color: red;
  
`;

const ItemReviewWrapper = styled.div`
  margin-left: 261px;
  margin-bottom: 84.07px;
`;
