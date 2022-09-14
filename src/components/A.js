import styled from 'styled-components';

const A = styled.a`
  font-size: ${({ size = '16px' }) => size};
  font-weight: ${({ weight = '600' }) => weight};
  line-height: 162%;
  letter-spacing: -0.288889px;
  color: ${({ color = '#1A1A1A' }) => color};
  text-decoration: ${({ decoration = 'none' }) => decoration};

  &:hover {
    color: #767676;
    text-decoration: ${({ hoverDecoration = 'none' }) => hoverDecoration};
  }
`;

export default A;
