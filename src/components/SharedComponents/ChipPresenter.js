import styled from 'styled-components';
import { color } from '../../lib/theme';

export const Chip = styled.span`
  align-items : center;
  justify-content: center;
  background-color: ${color.grey[1]};
  width: auto;
  height: 32px;
  padding: 3px 9px;
  border-radius: 2px;

  margin-right: 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
`;

export const ChipWrapper = styled.span`
  display: flex;
`;