import styled from 'styled-components';
import Rating from '../StarRating/Rating';

const RatingContainer = ({
  rating,
  hoverRating,
  setRating,
  setHoverRating,
}) => {
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <StarContainer>
      <StarRating>
        {[1, 2, 3, 4, 5].map((index) => { //rating의 경우 배열의 순서가 불변하므로 따로 key를 주지 않음.
          return (
            <Rating
              index={index}
              rating={rating}
              hoverRating={hoverRating}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              onSaveRating={onSaveRating}
            />
          );
        })}
      </StarRating>

      {[1, 2, 3, 4, 5].map((num) => (
        <HiddenText key={num} show={hoverRating === num}>
          {textList[num - 1]}
        </HiddenText>
      ))}
    </StarContainer>
  );
};

export default RatingContainer;

const StarContainer = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 61px;
`;

const StarRating = styled.div`
  display: flex;
  width: 189px;
  height: 30.38px;
`;

const textList = [
  '별로에요',
  '그저 그래요',
  '보통이에요',
  '좋아요',
  '아주 좋아요',
];

const HiddenText = styled.div`
  margin-left: 21px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;

  color: #222222;

  ${({ show }) => (show ? `display:block` : `display:none`)}
`;
