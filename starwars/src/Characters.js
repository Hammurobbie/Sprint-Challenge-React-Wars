import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterContainer from "./CharacterContainer";

const Characters = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setData(response.data.results);
        console.log(response.data.results);
      })
      .catch(error => {
        console.log("The data was not returned.");
      });
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <CharacterContainer
          key={index}
          char={item.name}
          eyeColor={item.eye_color}
          hairColor={item.hair_color}
          height={item.height}
          skinColor={item.skin_color}
        />
      ))}
    </>
  );
};

export default Characters;
