import styled from 'styled-components';

const SmallText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 157%;
  letter-spacing: -0.252778px;
  color: ${({ color = '#1A1A1A' }) => color};
`;

export default SmallText;
