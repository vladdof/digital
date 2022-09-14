import Container from 'components/Container';
// import Icons from 'components/Icons';
import ipad from './ipad.svg';
import BannnerWrapper from './BannerWrapper';
import MainMessage from './MainMessage';

export default function SignUp() {
  return (
    <Container>
      <BannnerWrapper direction="column">
        <MainMessage />
        <img src={ipad} alt="ipad" />
      </BannnerWrapper>
    </Container>
  );
}
