import styled from 'styled-components';

const RateBars = () => {
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
        <RateBarBackground>
          <RateBar />
        </RateBarBackground>

        <RateBarBackground>
          <RateBar />
        </RateBarBackground>

        <RateBarBackground>
          <RateBar />
        </RateBarBackground>

        <RateBarBackground>
          <RateBar />
        </RateBarBackground>

        <RateBarBackground>
          <RateBar />
        </RateBarBackground>
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

  width: 100px;
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
