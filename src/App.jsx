import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Home from './views/Home';
import Results from './views/Results';
import { Services } from './services'

class App extends Component {

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Home} location="hash" />
              <Route path="/results" render={(props) => <Results {...props} />} location="hash" />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
