import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layout';
import Home from './components/Home/index.js';
import Contact from './components/Contact/index.js';
import About from './components/About/index.js';
import Portfolio from './components/Portfolio/index.js';


function App() {
  return (

    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route  index element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
