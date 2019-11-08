import React from "react";
import styled from "styled-components";

const CharDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(245, 245, 245, 0.75);
  margin: 5% 0 5% 0;
`;

const CharacterContainer = props => {
  const { char, eyeColor, skinColor, hairColor, height } = props;

  return (
    <CharDiv>
      <h3>{char}</h3>
      <p>Eye Color: {eyeColor}</p>
      <p>Skin Color: {skinColor}</p>
      <p>Hair Color: {hairColor}</p>
      <p>Height: {height}</p>
    </CharDiv>
  );
};

export default CharacterContainer;
