// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import RouterComponent from './Router';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <RouterComponent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
