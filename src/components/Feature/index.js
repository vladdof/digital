import Container from 'components/Container';

import FeatureWrapper from './FeatureWrapper';
import FeatureNews from './FeatureNews';
import MainMessage from './MainMessage';

export default function SignUp() {
  return (
    <Container>
      <FeatureWrapper>
        <FeatureNews />
        <MainMessage />
      </FeatureWrapper>
    </Container>
  );
}
