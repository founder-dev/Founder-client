import React from 'react';
import styled from 'styled-components';

export default function Slide({ img }) {
  return <IMG src={img} />;
}

const IMG = styled.img`
  margin-top: 15.7px;
  width: 76px;
  height: 76px;
  margin-right: 8px;
  border-radius: 4px;
`;
