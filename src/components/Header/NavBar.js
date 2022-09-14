import styled from 'styled-components';
import Link from 'components/Link';
import stylesFlex from 'components/stylesFlex';

const linkNames = [
  'Home',
  'Features',
  'Pricing',
  'About Us',
];

const Wrapper = styled.ul`
  ${stylesFlex};
  flex-grow: 1;
  column-gap: 30px;
`;

const NavBar = () => (
  <Wrapper justify="center">
    {linkNames.map(link =>
      <Link
        key={link}
        text={link}
      />
    )}
  </Wrapper>
);

export default NavBar;
