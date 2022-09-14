import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Banner from 'components/Banner';
import Feature from 'components/Feature';
import SignUp from 'components/SignUp';
import Pricing from 'components/Pricing';
import Cta from 'components/Cta';
import Testimonials from 'components/Testimonials';
import GlobalStyle from './global-styles';

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppWrapper>
      <Header/>
      <Banner/>
      <Feature/>
      <SignUp/>
      <Pricing/>
      <Cta/>
      <Testimonials/>
      <FooterContainer/>
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
