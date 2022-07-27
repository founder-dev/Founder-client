import { color, fontsize, fontWeight } from '../../styles/theme';
import styled, { css } from 'styled-components';

export const Instruction = styled.div`
  font-weight: ${(props) => props.weight};
  font-size: 20px;

  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;
