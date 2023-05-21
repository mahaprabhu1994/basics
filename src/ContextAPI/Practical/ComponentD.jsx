import React, { useContext } from 'react'
import { UserContext, ValueContext } from './Parent'

function ComponentD() {
    //3ed using useContext method
    const name = useContext(UserContext)
    const age = useContext(ValueContext);
    return (
        <div>
            <h1>Component D form Parent Component</h1>
            <h1> this is using useContext</h1>
            <h1>hi {name}.</h1>
            <h1>i'm {age} years Young.</h1>
        </div>
    )
}

export default ComponentD