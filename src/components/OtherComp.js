import React, { useContext } from "react";
import { Name } from "../App";
// import { FirstName, LastName } from "../App";
const OtherComp = () => {
  // const firstName = useContext(FirstName);
  // const lastName = useContext(LastName);

  const name = useContext(Name);
  name('SeetaRam');

  // lastName('kirtan')
  // console.log(lastName)

  return (
    <div>
     
      {/* My name is {firstName.name + " " + firstName.lname} <br />
      My updated name is {firstName.name}
   */}
    </div>
  );
};

export default OtherComp;
