import styled from 'styled-components';

import A from 'components/A';
import Icons from 'components/Icons';
import stylesFlex from 'components/stylesFlex';

const brands = {
  philips: {
    width: 104,
    height: 19,
  },
  logitech: {
    width: 126,
    height: 37,
  },
  amazon: {
    width: 161,
    height: 32,
  },
  facebook: {
    width: 142,
    height: 28,
  },
  google: {
    width: 125,
    height: 40,
  },
  linkedin: {
    width: 142,
    height: 37,
  },
};

const Wrapper = styled.div`
  ${stylesFlex};
  column-gap: 30px;
`;

const BrandList = () => (
  <Wrapper justify="center" align="center">
    {Object.entries(brands).map((item, key) =>
      <A
        key={item[0]}
        href="#"
        target="_blank"
      >
        <Icons
          name={`b-${item[0]}`}
          width={item[1].width}
          height={item[1].height}
        />
      </A>
    )}
  </Wrapper>
);

export default BrandList;
