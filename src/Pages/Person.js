import React from "react";

const Person = ({ name, lastName, department, phone, isEsra }) => {
  return (
    <div>
      <h1> {name} </h1>
      <h2>{lastName}</h2>
      <h3>{department}</h3>
      <h4>{phone}</h4>
      <h5>{isEsra}</h5>
    </div>
  );
};
export default Person;
