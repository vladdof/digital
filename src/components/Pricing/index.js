import Container from 'components/Container';
import PricingWrapper from './PricingWrapper';
import CardList from './CardList';

export default function Pricing() {
  return (
    <Container>
      <PricingWrapper>
        <CardList />
      </PricingWrapper>
    </Container>
  );
}
