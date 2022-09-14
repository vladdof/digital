import { css } from 'styled-components';

const stylesFlex = css`
  position: relative;
  display: ${({ display = 'flex' }) => display};
  ${({ justify }) => justify ? `justify-content: ${ justify }` : ''};
  ${({ align }) => align ? `align-items: ${align}` : ''};
  flex-direction: ${({ direction = 'row' }) => direction};
`;

export default stylesFlex;
