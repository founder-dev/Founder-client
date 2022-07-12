import { useMemo, useState } from 'react';
import StarIcon from './StarIcon';
import styled from 'styled-components';

function RatingIcon(props) {
  const {
    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = useMemo(() => {
    if (hoverRating >= index) {
      return 'black';
    } else if (!hoverRating && rating >= index) {
      return 'black';
    }
    return 'none';
  }, [rating, hoverRating, index]);
  return (
    <RatingBox
      className="cursor-pointer"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave()}
      onClick={() => onSaveRating(index)}
    >
      <StarIcon fill={fill} />
    </RatingBox>
  );
}
export default RatingIcon;

const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 7px;
`;
