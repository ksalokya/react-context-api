import React from 'react'
import { FirstName, LastName } from '../App'

const ComponentC = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fName) => {
                    return (
                        <LastName.Consumer>
                            {(lName) => {
                                return (
                                    <>
                                        <h1>My first name is {fName}</h1>
                                        <h1>My last name is {lName}</h1>
                                    </>
                                );
                            }}
                        </LastName.Consumer>
                    );
                }}
            </FirstName.Consumer>
        </>
    );
}

export default ComponentC