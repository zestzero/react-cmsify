import React, { Component } from 'react';
import { Cms } from '../../components';
import './style.css';

class Layout extends Component {
  public render() {
    return (
      <div className="Layout">
          <Cms id={1} />
      </div>
    );
  }
}

export default Layout;
