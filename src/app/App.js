import styled from 'styled-components';

import HeaderContainer from 'containers/HeaderContainer';
import FooterContainer from 'containers/FooterContainer';
import Banner from 'containers/BannerContainer';
import Feature from 'containers/FeatureContainer';
import SignUp from 'containers/SignUpContainer';
import Pricing from 'containers/PricingContainer';
import Cta from 'containers/CtaContainer';
import Testimonials from 'containers/TestimonialsContainer';
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
      <HeaderContainer />
      <BannerContainer />
      <FeatureContainer />
      <SignUpContainer />
      <PricingContainer />
      <CtaContainer />
      <TestimonialsContainer />
      <FooterContainerContainer />
      <GlobalStyle />
    </AppWrapper>
  );
}

export default App;
