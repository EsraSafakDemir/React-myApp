import React, { useState } from "react";
import Dog from "./Dog";
import Bird from "./Bird";

const Cat = ({ name, kind, age, color }) => {
  const [isShowingText, setIsShowingText] = useState("Esra Safak");
  return (
    <div>
      <h1>{isShowingText}</h1>
      <h1> Cat Component </h1>
      <h2> {name} </h2>
      <h3>{kind}</h3>
      <h4>{age}</h4>
      <h5>{color}</h5>
      <Bird birdName={name} birdKind={kind} birdAge={age} birdColor={color} />
      <button
        style={{ backgroundColor: "blue" }}
        onClick={() => {
          setIsShowingText("Esra demir");
        }}
      >
        Sign In
      </button>
    </div>
  );
};
export default Cat;
