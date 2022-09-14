import styled from 'styled-components';
import stylesFlex from 'components/stylesFlex';
import MainText from 'components/Text/Text';

const Wrapper = styled.div`
  ${stylesFlex};
  margin-bottom: 1.25rem;
`;

const PriceText = styled(MainText)`
  font-size: 72px;
  line-height: 82px;
  letter-spacing: -1.3px;
`;

const MonthText = styled(MainText)`
  font-size: 20px;
`;

const CardPrice = ({ ...props }) => (
  <Wrapper align="baseline">
    <PriceText weight="700">
      {props.price}
    </PriceText>
    <MonthText>
      /month
    </MonthText>
  </Wrapper>
);

export default CardPrice;
