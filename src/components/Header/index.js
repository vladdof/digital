import Container from 'components/Container';
import HeaderWrapper from './HeaderWrapper';
import NavBar from './NavBar';
import GetStarted from './GetStarted';

export default function Header() {
  return (
    <Container bgColor="#F5F5F5">
      <HeaderWrapper align="center">
        <NavBar />
        <GetStarted />
      </HeaderWrapper>
    </Container>
  );
}
