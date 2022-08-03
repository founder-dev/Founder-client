import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ItemReviewCard from '../ItemDetailComponents/ItemReviewComponents/ItemReviewCard';
import Slider from './Slider';
import Review from '../../assets/json/Review.json';
import NotFoundImage from '../../assets/ItemDetailPageAssets/NotFoundImage.png';
import { fetchItemReview } from '../../API';
import OverAllRate from './ItemReviewComponents/OverAllRate';

function ItemReview({ id }) {
  const reviewData = Review;
  const [itemReview, setItemReview] = useState(null);

  useEffect(() => {
    fetchItemReview({ setItemReview, id });
  }, [id]);

  if (!itemReview) return null;
  console.log(itemReview);

  return (
    <>
      {itemReview.reviews == '' ? (
        <NotFoundWrapper>
          <NotFound src={NotFoundImage} />
          <NotFoundText>아직 작성된 후기가 없어요ㅠㅠ</NotFoundText>
        </NotFoundWrapper>
      ) : (
        <ItemReviewWrapper>
          <ReviewInfoContainer>
            <OverAllRate itemReview={itemReview} />
            <PhotoReviewWrapper>
              <PhotoText>사진 후기 모아보기</PhotoText>
              <Slider />
            </PhotoReviewWrapper>
          </ReviewInfoContainer>
          <ItemReviewCardGrid>
            {itemReview.reviews.map((review) => (
              <ItemReviewCard
                key={review.id}
                text={review.review_text}
                id={review.nickname}
                tag={review.review_tag_arr}
                date={review.created_at}
                star={review.star_rate}
                main_img={review.review_img_main}
                review_media={review.review_reviewmedia}
              />
            ))}
          </ItemReviewCardGrid>
        </ItemReviewWrapper>
      )}
    </>
  );
}

export default ItemReview;

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const NotFound = styled.img`
  margin-top: 68.61px;
  margin-bottom: 27px;

  width: 289px;
  height: 269px;
`;

const NotFoundText = styled.text`
  font-weight: 700;
  font-size: 20px;
  line-height: 31px;
  text-align: center;
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

const ItemReviewCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 918px;
  column-gap: 56px;
  margin-top: 72px;
`;

const ItemReviewWrapper = styled.div`
  margin-left: 261px;
  margin-bottom: 84.07px;
`;
