import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
