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
  margin-top: 15px;
  width: 100%;
  background: #ccc;
  position: fixed;
`;

const Progress = styled.div`
  height: 4px;
  background: blue;
  width: 0%;
`;
export default HorizontalProgress;
