import './App.css';
import IndexPage from './component/page/IndexPage';
import CreateEditPage from './component/page/CreateEditPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, path: '/', component: IndexPage, exact: true },
        { id: 2, path: '/form', component: CreateEditPage, exact: true },
        { id: 3, path: '/form/:new', component: CreateEditPage, exact: false }
      ]
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          {this.state.data.map(data => (
            <Route key={data.id} path={data.path} component={data.component} exact={data.exact}></Route>
          ))}
        </Switch>
      </Router>
    );
  }
}

export default App;
