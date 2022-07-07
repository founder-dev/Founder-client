import React from 'react';
import styled from 'styled-components';

const HorizontalProgress = ({ scroll }) => {
  return (
    <Container>
      <Progress style={{ width: scroll }} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: white;
  position: fixed;
`;

const Progress = styled.div`
  height: 4px;
  background: rgba(34, 34, 34, 1);
  width: 0%;
`;
export default HorizontalProgress;
