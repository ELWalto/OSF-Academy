import React from 'react';
import { BrowserRouter as Router, Route ,Routes  } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" exact component={Home}/>
      </Routes>

    </Router>
  );
}

export default App;
