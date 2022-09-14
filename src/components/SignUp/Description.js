import styled from 'styled-components';
import Title from './Title';
import Text from './Text';

const Wrapper = styled.div`
  position: relative;
`;

const Description = () => (
  <Wrapper>
    <Title>
      Sign Up to Learn More About Design Struct
    </Title>
    <Text weight="400" color="#767676">
      Nowadays, it isn’t uncommon to see lenders rapidly adopting a digital lending strategy to the process
    </Text>
  </Wrapper>
);

export default Description;
