import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 849px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-inline: auto;
  gap: 16px;
  margin-top: 48px;
  padding: 8px;
  height: fit-content;
  @media screen and (min-width: 520px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Wrapper = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
