import React, { useReducer } from 'react'

const initialState = {
    firstValue: 0,
    secValue: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { firstValue: state.firstValue + action.value };
        case 'decrement': return { firstValue: state.firstValue - action.value };
        case 'reset': return initialState;
        default: return state;
    }
}

function ComplexState() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>complex State & action</h1>
            <div>
                <h1>Value : {count.firstValue}</h1>
                <button onClick={() => { dispatch({ type: "increment", value: 1 }) }}>increment</button>
                <button onClick={() => { dispatch({ type: "decrement", value: 1 }) }}>decrement</button>
                <button onClick={() => { dispatch({ type: "increment", value: 5 }) }}>increment 5</button>
                <button onClick={() => { dispatch({ type: "decrement", value: 5 }) }}>decrement 5</button>
                <button onClick={() => { dispatch({ type: "reset" }) }}>reset</button>
            </div>
        </div>
    )
}

export default ComplexState