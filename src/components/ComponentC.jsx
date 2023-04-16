import React, { useContext } from 'react'
import { ThemeContext } from '../App'

const ComponentC = () => {
    const themeContext = useContext(ThemeContext);
    function hanleClick(){
        themeContext();
    }
    return (
        <>  
            <button onClick={hanleClick}> Click Me! </button>
        </>
    );
}

export default ComponentC