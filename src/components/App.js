import React from 'react';
import Navbar from './Navbar'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
import '../styles/App.css'

const App = (props) =>
  <Router>
    <div>
      <Navbar />
      <Route className="navbar" exact path="/" render={() => <div>Welcome to Imgur Browser</div>} />
      <Route path='/random' render={() => <div>Mock Random esting</div>} />
      <Route path='/favorites' render={() => <div>Mock Favorites </div>} />
    </div>
  </Router>;

export default App;
