import React, { useState, useEffect, createContext } from "react";
import ComponentA from './components/ComponentA'
import './app.css'

export const ThemeContext = createContext();

function App() {

  const [state, setState] = useState(false);
  function handleState() {
    setState(!state);
  }

  useEffect(() => {
    console.log(state);
  }, [state])

  // className={state ? "class1" : "class2"}

  return (
    <div>
      <ThemeContext.Provider value={handleState}>
        <div className={`div-class ${state ? "dark-mode" : ""}`}>
          Hello From App
        </div>
        <ComponentA />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
