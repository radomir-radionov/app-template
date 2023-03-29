import styled from 'styled-components';
import { device } from 'styles';

export const LayoutHomeStyled = styled.main`
  display: flex;
  flex: 1;
  max-width: 1100px;
  width: 100%;
  margin-bottom: 64px;

  @media (max-width: ${device.laptopM}) {
    padding: 0 64px;
    margin-bottom: 58px;
  }

  @media (max-width: ${device.tablet}) {
    justify-content: center;
    padding: 0 16px;
  }
`;