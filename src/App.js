import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavBar from './components/CustomNavBar'
import Home from './components/Home'
import { Provider } from 'react-redux';
import store from './store'

class App extends Component {
  componentDidMount() {
    console.log(store.getState());
    console.log("HELLO")
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <CustomNavBar />
            <Route exact path='/' component={Home}/>
            <Route path='/random' render={() => <div>Random</div>} />
            <Route path='/favorites' render={() => <div>Favorites</div>} />
          </div>
        </Router>
      </Provider>
    )
  }
}


export default App;
