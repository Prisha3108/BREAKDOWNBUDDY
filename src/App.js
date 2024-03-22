import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouterComponent from './Router';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <RouterComponent />
      </div>
    </Router>
  );
}

export default App;
