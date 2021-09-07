import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import About from './components/About'
import Users from './components/Users'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/users/:id" render={(props) => (
            <Users {...props} greetingsMessage={'Good Morning'} />
          )} />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/users" >Users</Link>
      </BrowserRouter>
    );
  }
}

export default App;
