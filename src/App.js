import React from 'react';

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './css/App.css';

import { Home, About, Contact, Users, Login, Signup} from './components';

import { Nav, Footer } from './layout';

import { api } from './api/api';

function App() {
  return (
      <Router>
        <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/users" element={<Users />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/api" element={<api />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
