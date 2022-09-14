import styled from 'styled-components';

import Input from 'components/Input/Input';
import Button from 'components/Button';
import stylesFlex from 'components/stylesFlex';

const FormTag = styled.form`
  ${stylesFlex};
  column-gap: 15px;
`;

const Form = () => (
  <FormTag>
    <Input
      placeholder="Type your email"
      height="56"
    />
    <Button
      size="18"
      width="114"
      height="56"
      weight="600"
    >
      Confirm
    </Button>
  </FormTag>
);

export default Form;
