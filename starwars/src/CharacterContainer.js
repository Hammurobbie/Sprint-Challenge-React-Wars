import React from "react";
import styled from "styled-components";

const CharDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(245, 245, 245, 0.75);
  margin: 5% 0 5% 0;
  color: #a05735;
`;

const P = styled.p`
  color: #3f332e;
`;

const CharacterContainer = props => {
  const { char, eyeColor, skinColor, hairColor, height } = props;

  return (
    <CharDiv>
      <h3>{char}</h3>
      <P>Eye Color: {eyeColor}</P>
      <P>Skin Color: {skinColor}</P>
      <P>Hair Color: {hairColor}</P>
      <P>Height: {height}</P>
    </CharDiv>
  );
};

export default CharacterContainer;
