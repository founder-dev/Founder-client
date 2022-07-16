import StarIcon from './StarIcon';
import styled from 'styled-components';

function Rated({ rating }) {
  const fillArray = [false, false, false, false, false];

  for (let i = 0; i < rating; i++) {
    fillArray[i] = true;
  }
  return (
    <RatingBox>
      <StarIcon fill={fillArray[0] == true ? 'black' : 'none'} />
      <StarIcon fill={fillArray[1] == true ? 'black' : 'none'} />
      <StarIcon fill={fillArray[2] == true ? 'black' : 'none'} />
      <StarIcon fill={fillArray[3] == true ? 'black' : 'none'} />
      <StarIcon fill={fillArray[4] == true ? 'black' : 'none'} />
    </RatingBox>
  );
}
export default Rated;

const RatingBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4.27px;
  width: 102.56px;
  height: 16.02px;
`;
