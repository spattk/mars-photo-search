import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home'

class App extends Component {

  render() {

    const App = () => (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )

    return (
      <Switch>
        <App />
      </Switch>
    )
  };
}

export default App;
