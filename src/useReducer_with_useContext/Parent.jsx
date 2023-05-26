import React, { createContext, useReducer } from 'react';
import CompA from './CompA';
import CompB from './CompB';
import CompC from './CompC';



//step2:create Context Hook
export const CountContext = createContext();


//Step 1: to create common reducer function and initialState Value;
const initialState = 0;
const reducer = (prevState, action) => {
    switch (action) {
        case 'increment':
            return prevState + 1;
        case 'decrement':
            return prevState - 1;
        case 'reset':
            return initialState;
        default:
            return prevState
    }
}


function Parent() {
    const [count, Dispatch] = useReducer(reducer, initialState)
    return (
        <CountContext.Provider value={{ countState: count, countDispatch: Dispatch }}>
            <div>
                <h1>Count:{count}</h1>
                <CompA />
                <CompB />
                <CompC />
            </div>
        </CountContext.Provider>
    )
}

export default Parent