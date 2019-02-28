import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Home from './views/Home';
import Results from './views/Results';
import { Services } from './services'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      material: 'News'
    }
  }

  handleChange = async (event) => {
    const { target: { name, value } } = event
    await this.setState({ [name]: value })
  }

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={(props) =>
                <Home {...props}
                  handleChange={this.handleChange}
                />
              } location="hash" />
              <Route path="/results" render={(props) =>
                <Results {...props}
                  keyword={this.state.keyword}
                  material={this.state.material}
                  handleChange={this.handleChange}
                />}
                location="hash" />
              <Route component={Home} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
