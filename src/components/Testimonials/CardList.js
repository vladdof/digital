import styled from 'styled-components';

import Card from 'components/Card';
import stylesFlex from 'components/stylesFlex';
import CardText from './CardText';
import Profile from './Profile';

const userList = [
  {
    name: 'Alexander F',
    position: 'IT Admin at Digital Group',
  },
  {
    name: 'Robert B',
    position: 'UX Designer at Digital Group',
  },
  {
    name: 'Vadim Z',
    position: 'Executive at Digital Group',
  },
];

const Wrapper = styled.ul`
  ${stylesFlex};
  column-gap: 30px;
  width: 100%;
  margin-top: 3.125rem;
`;

const CardList = () => (
  <Wrapper>
    {userList.map((user) =>
      <Card key={user.name} padding="1.56">
        <CardText weight="600" color="#767676">
          ‘‘Nowadays, it isn’t great uncommon to see
          lenders rapidly adopting a digital lending
          strategy to make streamline the process’’
        </CardText>
        <Profile name={user.name} position={user.position} />
      </Card>
    )}
  </Wrapper>
);

export default CardList;
