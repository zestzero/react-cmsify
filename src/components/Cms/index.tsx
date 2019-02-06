import React from 'react';
import { withFirebase } from '../../containers/Firebase';

interface IProps {
  id: number;
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
      <span>{this.state.data}</span>
    ) : (
      <span>Loading ...</span>
    );
  }
}

export default withFirebase(Cms);
