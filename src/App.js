import React from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import Component from './Component'

class App extends Component {
  render() {
    return (
      <div >
        <CharacterCard value="h" />
        <CharacterCard value="i" />
      </div>
    );
  }
}

export default App;
