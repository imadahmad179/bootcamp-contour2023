import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import Student from './Student';
import Courses from './Courses';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/">
    
        </Route>
        <Route path="/Student">
      
        </Route>
        <Route path="/Courses">
         
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
