import styled from 'styled-components';

import Label from 'components/Input/Label';
import InputWithIcon from 'components/Input/InputWithIcon';
import stylesFlex from 'components/stylesFlex';

const FormTag = styled.form`
  ${stylesFlex};
  row-gap: 24px;
  margin-bottom: 1.875rem;
  color: #767676;
`;

const Form = () => (
  <FormTag direction="column">
    <div>
      <Label htmlFor="period">Period</Label>
      <InputWithIcon placeholder="Monthly" name="arrow-down" id="period" size="20" height="48" />
    </div>
    <div>
      <Label htmlFor="teammates">Teammates</Label>
      <InputWithIcon placeholder="User 1" name="arrow-down" id="teammates" size="20" height="48" />
    </div>
  </FormTag>
);

export default Form;
