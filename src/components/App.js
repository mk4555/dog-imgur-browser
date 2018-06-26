import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';
// import './App.css';

const App = (props) =>
  <Router>
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to='/random'>Random</NavLink>
      <NavLink to='/favorites'>Favorites</NavLink>
      <Route exact path="/" render={() => <div>Welcome to Imgur Browser</div>} />
      <Route path='/random' render={() => <div>Mock Random esting</div>} />
      <Route path='/favorites' render={() => <div>Mock Favorites </div>} />
    </div>
  </Router>;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
