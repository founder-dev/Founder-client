import styled from 'styled-components';

const RateBars = () => {
  const star_rate = [2, 3, 4, 5, 2]; //예시
  const total = star_rate.reduce(function add(sum, currValue) {
    return sum + currValue;
  }, 0);

  return (
    <>
      <TextWrapper>
        <Text>아주 좋아요</Text>
        <Text>좋아요</Text>
        <Text>보통이에요</Text>
        <Text>그저 그래요</Text>
        <Text>별로예요</Text>
      </TextWrapper>

      <ColumnWrapper>
      {
        [0,1,2,3,4].map((num)=>(
          <RateBarBackground>
            <RateBar rate={star_rate[num]} total={total}/>
          </RateBarBackground>
        ))
      }
      </ColumnWrapper>
    </>
  );
};

export default RateBars;

const Text = styled.div`
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 10px;
  color: #888888;
  line-height: 18px;
`;

const RateBarBackground = styled.div`
  display: relative;

  width: 200px;
  height: 4px;

  background: #e9e9e9;
  border-radius: 15.3167px;
`;

const RateBar = styled.div`
  display: absolute;

  width: ${(props) =>
    (props.rate / props.total) * 200}px; //별점수 / 전체 별점 * 200
  height: 4px;

  background: #007dfe;
  border-radius: 15.3167px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 19px;
  margin-right: 17.81px;
  gap: 6px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 27px;
  gap: 20px;
  margin-right: 49.19px;
`;
