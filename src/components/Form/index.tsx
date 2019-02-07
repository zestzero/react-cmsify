import React from 'react';
import { Form } from 'semantic-ui-react';

interface IProps {
  children: React.ReactElement<any>;
}

const FormComponent = ({ children }: IProps) => (
  <Form>
    {children}
  </Form>
);

export default FormComponent;
