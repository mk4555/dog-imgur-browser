import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
          <Route exact path='/' render={() => <div>Hello</div>} />
          <Route path='/random' render={() => <div>Random</div>} />
          <Route path='/favorites' render={() => <div>Favorites</div>} />
        </div>
      </Router>
    )
  }
}

export default App;
