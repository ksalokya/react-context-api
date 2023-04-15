import React, { useContext } from 'react'
import ComponentC from './ComponentC'

import { FirstName, LastName } from '../App'

const ComponentB = () => {

    const fName = useContext(FirstName);
    const lName = useContext(LastName);

    return <h1>My name is {fName} {lName}</h1>
}

export default ComponentB