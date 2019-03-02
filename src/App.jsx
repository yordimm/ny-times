import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import './App.css';
import Home from './views/Home';
import Results from './views/Results';
import { Services } from './services';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
      material: 'News',
      materials: Services.getMaterialOptions()
    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event
    this.setState({ [name]: value })
  }

  render() {
    const { store } = this.props;
    const { keyword, material, materials } = this.state;
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={(props) =>
                <Home {...props}
                  handleChange={this.handleChange}
                  materials={materials}
                />
              } location="hash" />
              <Route path="/results" render={(props) =>
                <Results {...props}
                  materials={materials}
                  keyword={keyword}
                  material={material}
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
