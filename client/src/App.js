import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Game from './Game';
import GameOver from './GameOver';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Painikepeli</h1>
        <p>
          Press the button to get points (maybe). Easy and fun, isn&lsquo;t it?
        </p>
      </header>
      <div className="content">
        <Router>
          <Switch>
            <Route exact path="/">
              <Game />
            </Route>
            <Route path="/gameover">
              <GameOver />
            </Route>
          </Switch>
        </Router>
      </div>
      <footer className="App-footer">
        Painikepeli made by Kari Harmaahieta
        <br />
        <a href="https://github.com/bunjovis/painikepeli">GitHub</a>
      </footer>
    </div>
  );
}

export default App;
