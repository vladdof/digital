import styled from 'styled-components';

import Label from 'components/Input/Label';
import InputWithIcon from 'components/Input/InputWithIcon';
import stylesFlex from 'components/stylesFlex';

const FormTag = styled.form`
  ${stylesFlex};
  row-gap: 24px;
  width: 350px;
`;

const Form = () => (
  <FormTag direction="column">
    <div>
      <Label htmlFor="user">Username</Label>
      <InputWithIcon name="user" id="user" size="22" height="56" />
    </div>
    <div>
      <Label htmlFor="email">email</Label>
      <InputWithIcon name="email" id="email" size="22" height="56" />
    </div>
    <div>
      <Label htmlFor="password">Password</Label>
      <InputWithIcon name="eye-off" id="password" size="22" height="56" />
    </div>
  </FormTag>
);

export default Form;
