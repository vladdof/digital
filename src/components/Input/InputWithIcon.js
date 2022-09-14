import styled from 'styled-components';
import Input from './Input';
import Icons from './Icons';

const Wrapper = styled.div`
  position: relative;
`;

const InputWithIcon = ({ name, size, placeholder, height, ...props }) => (
  <Wrapper>
    <Input
      placeholder={placeholder}
      height={height}
      {...props}
    />
    <Icons
      name={name}
      size={size}
    />
  </Wrapper>
);

export default InputWithIcon;
