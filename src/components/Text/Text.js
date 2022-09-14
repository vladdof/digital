import styled from 'styled-components';

const Text = styled.p`
  margin: 0;
  font-weight: ${({ weight = '600' }) => weight};
  line-height: 162%;
  letter-spacing: -0.288889px;
  color: ${({ color = '#1A1A1A' }) => color};
`;

export default Text;
