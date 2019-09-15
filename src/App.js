
import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Header from './components/header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
    </div>
  );
};

export default App;