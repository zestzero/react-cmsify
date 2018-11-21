import * as React from 'react';
import { PlaceHolder } from '../Editor';

interface IResult {
  name: string
  content: string
}

interface IProps {
  data: IResult[]
}

interface IState {
  data: IResult[]
}

class HomePage extends React.Component<IProps, IState> {
  public render() {
    return (
      <div className="HomePage">
       <div className="HomePage__layout"><PlaceHolder onAddClick={this.onAddClick} /></div>
      </div>
    );
  }

  private onAddClick () {
    return null;
  }
}

export default HomePage;
