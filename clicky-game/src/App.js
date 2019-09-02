import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import CharacterCard from './components/ImgCard';
import Scores from './components/Score';
import Record from './components/Record';
import Header from './components/Header';
import characters from './characters.json';
import './App.css';

class App extends Component {
  state = {
    characters,
    score: 0,
    highScore: 0,
    wins: 0,
    losses: 0,
    clicked: 0,
  }

  componentDidMount=()=>{
    this.update()
  }

  shuffle = (array) => {
      var i = 0;
      var j = 0;
      var temp = null;
      for (i = array.length - 1; i > 0; i-= 1) {
          j = Math.floor(Math.random() * (i + 1));
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array
  }; 
  

  render() {
    return (
      <div className='App'>
        <Header />
        <Scores highScore={this.state.highScore} yScore={this.state.score}/>
        <Wrapper>
          {this.state.characters.map(character => (

            <CharacterCard
            className='image'
            image={character.image}
            name={character.name}
            id={character.id}
            key={character.id}
            clicked={this.state.clicked[character.id]}
            score={this.handleClick}
            />
            ))}
        </Wrapper>
          <Record wins={this.state.wins} losses={this.state.losses}/>
      </div>
    )
  }
}
export default App;
