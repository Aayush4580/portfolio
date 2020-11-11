import React from 'react';
import './App.css';
import { HomePage } from './container/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage title={'from props'} />
    </div>
  );
}

export default App;
