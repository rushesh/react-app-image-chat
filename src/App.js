import React from 'react';
import Image from './components/Image';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ChatApp from './components/ChatApp';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FirebasePhotoApp from './components/firebasePhotoApp';
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/images" exact component={Image} />
      <Route path="/photoapp" exact component={FirebasePhotoApp} />
      <Route path="/chatapp" exact component={ChatApp} />
      </Switch>
    </div>
    </Router>
    );
}

export default App;

