import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/shared/Navbar';
import Home from './components/shared/Home';
import Portfolio from './components/portfolio/Portfolio.js';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';
import Footer from './components/shared/Footer';

const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/about' component={About} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
    <Footer />
  </>
)

export default App;
