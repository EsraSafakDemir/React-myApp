import React from "react";
import Person from "./Pages/Person";
import Cat from "./Test/Cat";
import Dog from "./Test/Dog";

const App = () => {
  return (
    <div>
      {/*<Person
        name="esra safak"
        lastName="demir"
        department="Softare Engineer"
        phone={123456}
        isEsra={true}
      />
      <Dog name="Aşil" Kind="Poderman"age={2} color ="brown"/> */}

      <Cat name="Yumak" kind="Siyam Kedisi" age={1} color="white" />
    </div>
  );
};
export default App;
