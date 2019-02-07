import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { Cms } from '../../components';
import FormComponent from '../../components/Form';
import TextInput from '../../components/Form/Textfield';

import './style.css';

class Layout extends Component {
  public render() {
    return (
      <div className="Layout">
          <FormComponent>
            <Form.Group widths="equal">
              <TextInput label="Cms ID" placeHolder="Any number that should not exist in DB" />
              <TextInput label="Text" placeHolder="Text" />
            </Form.Group>
          </FormComponent>
          <Cms id={1} />
      </div>
    );
  }
}

export default Layout;
