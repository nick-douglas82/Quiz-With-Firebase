import React from 'react';
import Home from './components/Home';
import { Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={ Home } />
      <Route path="/game" component={ Game } />
      <Route path="/highScores" component={ HighScores } />
    </Router>
  );
}

export default App;
