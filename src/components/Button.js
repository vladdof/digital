import styled, { css } from 'styled-components';

const notOutlinedStyle = css`
  background-color: #27A759;
  border: none;
`;

const outlinedStyle = css`
  color: #27A759;
  background-color: transparent;
  border: 2px solid currentColor;
  :hover {
    background-color: #fff;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width = '100%' }) => width === '100%' ? width : `${width}px`};
  height: ${({ height = '40' }) => height}px;
  padding: 8px 18px;

  font-size: ${({ size = 'inherit' }) => size}px;
  font-family: inherit;
  font-weight: ${({ weight = '500' }) => weight};
  letter-spacing: -0.25px;
  color: #FEFEFE;
  white-space: nowrap;

  appearance: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease;

  :hover {
    background-color: #269552;
  }

  ${({ outlined }) =>
    outlined === true
      ? outlinedStyle
      : notOutlinedStyle
  };
`;

export default Button;
