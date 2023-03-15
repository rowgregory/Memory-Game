import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: #121212;
  display: flex;
  flex-direction: column;
  padding: 8px;
  color: #fff;
  width: 100%;
  @media screen and (min-width: 520px) {
    width: 150px;
    height: 100vh;
  }
`;

const Navbar = ({ score, topScore, rightOrWrong }) => (
  <Container>
    <div>Current Score: {score}</div>
    <div>Top Score: {topScore}</div>
    <div>{rightOrWrong}</div>
  </Container>
);

export default Navbar;
