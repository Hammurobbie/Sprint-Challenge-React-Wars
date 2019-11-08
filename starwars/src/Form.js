import React from "react";
import styled from "styled-components";

const FormS = styled.form`
  color: white;
  text-align: center;
  font-size: 130%;
  display: flex;
  flex-direction: column;
  width: 15%;
  margin-left: 43%;
  text-align: center;
`;

const Input = styled.input`
  margin: 5%;
  text-align: center;
  font-size: 70%;
`;

const Button = styled.button`
  color: #a05735;
  font-size: 70%;
  border-radius: 20px;
`;

// const input = document.getElementById("input");
// input.addEventListener("keydown", input => data.filter(input));

// input.addEventListener("keydown");

const Form = () => {
  return (
    <FormS>
      <Input id="input" type="text" placeholder="Search" />
      <Button>Submit!</Button>
    </FormS>
  );
};

export default Form;
