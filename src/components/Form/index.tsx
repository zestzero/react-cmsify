import React from 'react';
import { Form } from 'semantic-ui-react';

interface IProps {
  className?: string;
  components: React.ReactNode[];
}

const FormComponent = ({ className, components }: IProps) => (
  <Form className={className}>
    {components.map((comp, index) => (
      <Form.Group key={`form-group-${index}`} widths="equal">
        {comp}
      </Form.Group>
    ))}
  </Form>
);

export default FormComponent;
