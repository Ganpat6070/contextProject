import { createContext, useState } from "react";
// import CompA from "./components/CompA";
import OtherComp from "./components/OtherComp";

// const FirstName = createContext();
// const LastName = createContext();

const Name = createContext();
function App() {
  // let data;
  // var obj = {
  //   name: 'chirag',
  //   lname: 'makwana'
  // }

  // const nameHandler = (surname) => {
  //   obj.name = surname;
  // }
  const [name, setName] = useState("Ram");
  const nameHandler = (data) => {
    setName(data);
  };
  return (
    <div>
      My name is {name}
      {/* <FirstName.Provider value={obj}>
        <LastName.Provider value={nameHandler}> */}
      <Name.Provider value={nameHandler}>
        {/* <CompA /> */}
        <OtherComp />
      </Name.Provider>
      {/* </LastName.Provider>
      </FirstName.Provider> */}
    </div>
  );
}

export default App;
export {Name};
// export {FirstName, LastName};
