import styled from 'styled-components';
import Title from './Title';
import CenteredWrapper from './CenteredWrapper';
import Text from './Text';

const Wrapper = styled(CenteredWrapper)`
  position: relative;
  font-size: 20px;
`;

const TitleWrap = styled(Title)`
  width: 58.33%;
  margin-left: auto;
  margin-right: auto;
`;

const TextWrap = styled(Text)`
  width: 43.33%;
  margin-left: auto;
  margin-right: auto;
`;

const MainMessage = () => (
  <Wrapper>
    <Text weight="600" color="#27A759" size="24">
      Long Headline Sample
    </Text>
    <TitleWrap>
      Headline of Modern & Digital Platform
    </TitleWrap>
    <TextWrap weight="500" color="#767676" size="20">
      Nowadays, it isn’t uncommon to see lenders
      rapidly adopting a digital lending strategy
    </TextWrap>
  </Wrapper>
);

export default MainMessage;
