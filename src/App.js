import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard'
import WordCard from './WordCard'

const word = "Hello";
class App extends Component {
  render() {
    return (
      <div className ="App">
        <WordCard value="Happy" />
      </div>
    );
  }

}
export default App;