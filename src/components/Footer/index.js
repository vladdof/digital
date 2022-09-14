import Container from 'components/Container';
import SmallText from 'components/Text/SmallText';
import Icons from 'components/Icons';
import InputWithIcon from 'components/Input/InputWithIcon';

import FooterWrapper from './FooterWrapper';
import CenteredWrapper from './CenteredWrapper';
import CommonWrapper from './CommonWrapper';
import LinkList from './LinkList';
import SocialList from './SocialList';

export default function Header() {
  return (
    <Container bgColor="#F5F5F5">
      <FooterWrapper direction="column">
        <CommonWrapper
          justify="space-between"
          align="center"
        >
          <Icons
            name="logo"
            width="125"
            height="55"
          />
          <SocialList align="center" />
          <InputWithIcon
            placeholder="Subscribe"
            name="arrow-right"
            size="18"
          />
        </CommonWrapper>
        <CenteredWrapper>
          <LinkList />
          <SmallText color="#767676">
            © 2020 All rights reserved
          </SmallText>
        </CenteredWrapper>
      </FooterWrapper>
    </Container>
  );
}
