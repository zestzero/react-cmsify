import React, { Component } from 'react';
import { Button, Checkbox, Segment } from 'semantic-ui-react';

import FormComponent from '../../components/Form';
import TextInput from '../../components/Form/Textfield';
import ContentPage from '../ContentPage';

import CmsContext from '../../context/cms';
import { ICmsData } from '../../types/ICmsData';
import { withFirebase } from '../Firebase';
import './style.scss';

interface IProps {
  firebase: any;
}

interface IState {
  cmsId: number;
  cmsText: string;
  shouldDisplayCmsId: boolean;
  [key: string]: number | string | boolean;
}

class Layout extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { cmsId: 0, cmsText: '', shouldDisplayCmsId: false };
  }
  public render() {
    return (
      <div className="Layout">
        {this.renderForm()}
        <CmsContext.Provider value={this.state.shouldDisplayCmsId}>
          <ContentPage />
        </CmsContext.Provider>
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
            onChange={this.onInputChange('cmsId')}
          />
          <TextInput label="Text" placeHolder="Text" onChange={this.onInputChange('cmsText')} />
        </React.Fragment>,
        <Button.Group>
          <Button>Cancel</Button>
          <Button.Or />
          <Button positive onClick={this.onSubmit}>Save</Button>
        </Button.Group>,
      ]}
    />
    Display ID: <Checkbox toggle onChange={this.onToggle}/>
    </Segment>
  )

  private onInputChange = (key: keyof IState) => (e: any) => this.setState({ [key]: e.target.value });
  private onToggle = (event: any, data: any) => this.setState({ shouldDisplayCmsId: data.checked });
  private onSubmit = async () => {
    const { cmsId, cmsText } = this.state;
    const cmsData: ICmsData = {
      id: cmsId,
      text: cmsText,
    };
    await this.props.firebase.storeCmsData(cmsData);
  }
}

export default withFirebase(Layout);
