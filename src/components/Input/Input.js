import styled from 'styled-components';

const Input = styled.input`
  width: ${({ width = '100%' }) => width === '100%' ? width : `${width}px`};
  height: ${({ height = '40' }) => height}px;
  padding: 7px 14px;
  font-weight: 400;
  font-size: inherit;
  background: transparent;
  border: 1px solid #D2D2D2;
  border-radius: 6px;
  transition: all .3s ease;

  ::placeholder {
    color: #767676;
  }

  :focus {
    outline: none;
    border-color: currentColor;
  }
`;

export default Input;
