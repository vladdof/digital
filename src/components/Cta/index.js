import Container from 'components/Container';
import Title2 from 'components/Title2';
import CtaWrapper from './CtaWrapper';
import BrandList from './BrandList';
import Form from './Form';
import CommonWrapper from './CommonWrapper';
import Divider from './Divider';

export default function Cta() {
  return (
    <Container bgColor="#F5F5F5">
      <CtaWrapper direction="column">
        <CommonWrapper justify="space-between" align="center">
          <Title2>Modern & Digital Platform</Title2>
          <Form />
        </CommonWrapper>
        <Divider />
        <BrandList />
      </CtaWrapper>
    </Container>
  );
}
