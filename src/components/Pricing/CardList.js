import styled from 'styled-components';

import Button from 'components/Button';
import Card from 'components/Card';
import stylesFlex from 'components/stylesFlex';
import CardTitle from './CardTitle';
import CardPrice from './CardPrice';
import CardForm from './CardForm';

const priceList = [
  {
    name: 'Starter',
    price: '$49',
    month: '/month',
  },
  {
    name: 'Premium',
    price: '$89',
    month: '/month',
  },
  {
    name: 'Unlimited',
    price: '$199',
    month: '/month',
  },
];

const Wrapper = styled.ul`
  ${stylesFlex};
  column-gap: 30px;
  width: 100%;
  margin-bottom: 1rem;
`;

const CardList = () => (
  <Wrapper align="center">
    {priceList.map((item, idx) =>
      <Card key={item.name}>
        <CardTitle weight="600">
          {item.name}
        </CardTitle>
        <CardPrice price={item.price} />
        <CardForm />
        <Button
          height="48"
          size="16"
          weight="600"
          outlined={idx !== 1 ? true : false}
        >
          Choose Plan
        </Button>
      </Card>
    )}
  </Wrapper>
);

export default CardList;
