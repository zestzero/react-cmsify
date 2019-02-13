import React from 'react';
import { withFirebase } from '../../containers/Firebase';
import CmsContext from '../../context/cms';

interface IProps {
  id: number;
  className: string;
  firebase: any;
}

interface IState {
  data: string | null;
}

class Cms extends React.PureComponent<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    this.state = { data: null };
  }

  public componentDidMount = async () => {
    const data = await this.props.firebase.getCmsData(this.props.id);
    this.setState({ data });
  }
  public render() {
    return this.state.data ? (
      <CmsContext.Consumer>
        {(shouldDisplayCmsId) => (
          <span className={this.props.className}>
            {shouldDisplayCmsId && `[ID:${this.props.id}]`}
            {this.state.data}
          </span>
        )}
      </CmsContext.Consumer>
    ) : (
      <span>Loading ...</span>
    );
  }
}

export default withFirebase(Cms);
