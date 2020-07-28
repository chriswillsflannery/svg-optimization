import React from 'react';

import Dice from '../Icons/Dice/Dice';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dice fill1="red" fill2="orange" />
        <p>
          Chris' Cool Site
        </p>
      </header>
    </div>
  );
}

export default App;
