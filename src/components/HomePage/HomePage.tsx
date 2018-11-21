import * as React from 'react';
import { Menu, PlaceHolder } from '../Editor';

interface IResult {
  name: string
  content: string
}

interface IProps {
  data: IResult[]
}

interface IState {
  data: IResult[]
  selectedComponent: string
}

class HomePage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: [],
      selectedComponent: '',
    }
  }

  public render() {
    return (
      <div className="HomePage">
       <div className="HomePage__layout"><PlaceHolder onAddClick={this.onAddClick("test1")} /></div>
       {this.state.selectedComponent && <Menu componentType="test" />}
      </div>
    );
  }
  private onAddClick = (componentName: string) => () => {
    this.setState({ selectedComponent: componentName });
  }
}

export default HomePage;
