import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';

import FormComponent from '../../components/Form';
import TextInput from '../../components/Form/Textfield';
import ContentPage from '../ContentPage';

import './style.scss';

class Layout extends Component {
  public render() {
    return (
      <div className="Layout">
        {this.renderForm()}
        <ContentPage />
      </div>
    );
  }

  private renderForm = () => (
    <Segment color="violet">
    <FormComponent
      components={[
        <React.Fragment>
          <TextInput
            label="Cms ID"
            placeHolder="Any number that should not exist in DB"
          />
          <TextInput label="Text" placeHolder="Text" />
        </React.Fragment>,
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button positive>Save</Button>
        </Button.Group>,
      ]}
    />
    </Segment>
  )
}

export default Layout;
