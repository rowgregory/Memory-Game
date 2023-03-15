import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1/1;
  display: flex;
  background: rgb(255, 254, 254);
  cursor: pointer;
  border: 4px rgb(99, 99, 99) solid;
  border-radius: 2px;
  box-shadow: 4px 4px 10px rgb(56, 56, 56);
  transition: all 0.25s ease-in-out;

  :hover {
    background: rgb(195, 195, 195);
    transform: scale(1.1);
    box-shadow: 8px 8px 20px rgb(56, 56, 56);
  }

  :active {
    transform: translate(1px, 1px);
  }
`;

const CharacterCard = ({ id, image, registerClick }) => (
  <div value={id} onClick={() => registerClick(id)}>
    <Image alt={id} src={image} />
  </div>
);

export default CharacterCard;
