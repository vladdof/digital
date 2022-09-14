import styled from 'styled-components';

import Button from 'components/Button';
import Title from './Title';
import Text from './Text';

const Wrapper = styled.div`
  width: 66.66%;
`;

const MainMessage = () => (
  <Wrapper>
    <Title>
      Headline of Modern & Digital Lending Platform Seconds
    </Title>
    <Text weight="500" color="#767676" size="20">
      Nowadays, it isn’t uncommon to see lenders rapidly adopting a
      digital lending strategy to streamline the lending process
      Gorgeous, high-quality design system for mobile, tablet & desktop devices
    </Text>
    <Button
      width="149"
      height="48"
      weight="600"
    >
      More Features
    </Button>
  </Wrapper>
);

export default MainMessage;
