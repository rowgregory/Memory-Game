import React, { useState } from 'react';
import CharacterCard from './components/CharacterCard';
import memoryCards from './memoryCards.';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  @media screen and (min-width: 520px) {
    flex-direction: row;
    height: 100vh;
  }
`;

const ReadyToPlayBtn = styled.div`
  width: 250px;
  height: 100px;
  border-radius: 30px;
  background: linear-gradient(to bottom, #7cd5fc, #193b98);
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 36px;
  font-family: 'Orbitron', sans-serif;
  filter: drop-shadow(0 35px 10px rgb(0 0 0 / 0.5));
  letter-spacing: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: 300ms;
  :active {
    transform: translateY(10px);
  }
  margin: auto;
`;

const App = () => {
  const [characters, setCharacters] = useState(memoryCards);
  const [currentScore, setCurrentScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [rightOrWrong, setRightOrWrong] = useState('');
  const [clicked, setClicked] = useState([]);
  const [showPlay, setShowPlay] = useState(true);

  const registerClick = id => {
    if (clicked.indexOf(id) === -1) {
      handleIncrement();
      setClicked(clicked.concat(id));
    } else {
      resetGame();
    }
  };

  const shuffleCards = () => {
    const arr = characters;
    const shuffle = arr
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);

    return shuffle;
  };

  const handleShuffle = () => {
    const shuffledCards = shuffleCards();
    setCharacters(shuffledCards);
  };

  const handleIncrement = () => {
    const newScore = currentScore + 1;
    setCurrentScore(newScore);
    setRightOrWrong('Correct!');

    if (newScore >= topScore) {
      setTopScore(newScore);
    }
    if (newScore === 12) {
      setCurrentScore(0);
      setClicked([]);
      setRightOrWrong('You Won!! Click on any icon to initiate new game!');
    }
    handleShuffle();
  };

  const resetGame = () => {
    setCurrentScore(0);
    setClicked([]);
    setRightOrWrong('Wrong!');
    setTopScore(topScore);
    setShowPlay(true);
    handleShuffle();
  };

  return (
    <Container style={{}}>
      <Navbar
        score={currentScore}
        topScore={topScore}
        rightOrWrong={rightOrWrong}
      />
      {showPlay ? (
        <ReadyToPlayBtn onClick={() => setShowPlay(false)}>PLAY</ReadyToPlayBtn>
      ) : (
        <Wrapper>
          {characters.map((character, k) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              image={character.image}
              registerClick={registerClick}
            />
          ))}
        </Wrapper>
      )}
    </Container>
  );
};

export default App;
