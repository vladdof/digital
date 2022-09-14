import Container from 'components/Container';
import Title2 from 'components/Title2';

import TestimonialsWrapper from './TestimonialsWrapper';
import CenteredWrapper from './CenteredWrapper';
import CardList from './CardList';

export default function Testimonials() {
  return (
    <Container>
      <TestimonialsWrapper direction="column">
        <CenteredWrapper>
          <Title2>
            What People Are Saying
          </Title2>
        </CenteredWrapper>
        <CardList />
      </TestimonialsWrapper>
    </Container>
  );
}
