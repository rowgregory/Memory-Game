import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import characters from "./friends.json";
import Column from "./components/Column";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";


class App extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightOrWrong: "",
    clicked:[],
  };

  registerClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    }
    else {
    this.resetGame();
    
    }
  };

  shuffleCards = () => {
    const arr = characters;
    const shuffle = arr.map((a) => ({sort: Math.random(), value:a}))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value)
      console.log(shuffle)
      return shuffle;
  };

  handleShuffle = () => {
    const shuffledCards = this.shuffleCards(characters);
    console.log(shuffledCards);
    this.setState({characters: shuffledCards});
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    console.log(newScore);
    this.setState({
      currentScore: newScore,
      rightOrWrong: "Keep going!"
    });
    if (newScore >= this.state.topScore) {
      this.setState({topScore:newScore});
    } 
    if (newScore === 12) {
      this.setState({
        currentScore: 0,
        clicked:[],
        rightOrWrong:'You Won!! Click on any icon to initiate new game!'
      });
    }
    this.handleShuffle()
  };

  resetGame = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightOrWrong: "Here we go again!",
      clicked: [],
    });
     this.handleShuffle();
     
  };
  
  render() {
    return (
      <Wrapper>
       <Navbar
        title="Mario Clicky Game"
        score={ this.state.currentScore}
        topScore = { this.state.topScore}
        rightOrWrong={this.state.rightOrWrong}
        />
        {this.state.characters.map(character => (
          <Column size="sm-6 md-3">
            <CharacterCard
              registerClick = {this.registerClick}
              handleIncrement = {this.handleIncrement}
              handleShuffle = {this.handleShuffle}
              resetGame = {this.resetGame}
              key = {character.id}
              id = {character.id}
              image = {character.image}
            />
          </Column>
      ))}
    </Wrapper>
    )
  }
};

export default App;
