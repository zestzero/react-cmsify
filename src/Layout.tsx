import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage';
​
interface IStore {
    store: any
}

const Root = ({ store }: IStore) => (
  <Provider store={store}>
    <Router>
      <Route exact={true} path="/" component={HomePage} />
    </Router>
  </Provider>
)
​
export default Root