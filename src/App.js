import React, { createContext } from "react";
import ComponentA from './components/ComponentA'

export const FirstName = createContext();
export const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={'John'}>
        <LastName.Provider value={'Doe'}>
          <ComponentA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
