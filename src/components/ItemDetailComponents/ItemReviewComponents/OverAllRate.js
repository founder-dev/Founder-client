import styled from 'styled-components';
import Rated from '../../StarRating/Rated';
import RateBars from './RateBars';

const OverAllRate = ({ itemReview }) => {
  const total = itemReview.star_rate.star_rate.reduce(function add(
    sum,
    currValue
  ) {
    return sum + currValue;
  },
  0);

  return (
    <>
      <OverallRating>
        <Text>총 평점</Text>
        <AlignCenter>
          <Average>{itemReview.star_rate.star_rate_avg}</Average>
          <Rated rating={itemReview.star_rate.star_rate_avg}></Rated>
          <NumText>{`(총 ${total}개의 구매평)`}</NumText>
        </AlignCenter>
      </OverallRating>
      <RateBars total={total} star_rate={itemReview.star_rate.star_rate} />
    </>
  );
};

export default OverAllRate;

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

const NumText = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #888888;
  margin-top: 8.09px;
`;

const Text = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: #888888;
`;

const Average = styled.div`
  margin-top: 10px;
  margin-bottom: 8.52px;
  font-weight: 800;
  font-size: 28px;
  color: #007dfe;
`;
