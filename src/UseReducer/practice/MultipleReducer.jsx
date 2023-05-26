import React, { useReducer } from 'react';
import { condCheck } from '../../CostomHooks/Test1';

const initialState = 0;


const reduce = (prevState, action) => {
    switch (action) {
        case 'Add':
            return prevState + 1;
        case 'sub':
            return prevState - 1;
        case 'multiply':
            return prevState * 2;
        case 'divide':
            return prevState / 2;
        default:
            return prevState
    }
};


function MultipleReducer() {
    const [count, dispatch] = useReducer(reduce, initialState);
    const [count2, dispatch2] = useReducer(reduce, initialState);


    // const condCheck = () => {
    //     if (count > count2) {
    //         return (<> <h1>Count one is Higher</h1></>
    //         )
    //     } else {
    //         return (<><h1>Count Two is Lower </h1></>
    //         )
    //     }
    // }

    return (
        <>
            <div>
                <h1>First Counter</h1>
                <h1>{count}</h1>
                <button onClick={() => { dispatch('Add') }}>Add</button>
                <button onClick={() => { dispatch('sub') }}>sub</button>
                <button onClick={() => { dispatch('multiply') }}>multiply</button>
                <button onClick={() => { dispatch('divide') }}>divide</button>
            </div>
            <br />
            <br />
            <br />
            <div>
                <h1>Second Counter</h1>
                <h1>{count2}</h1>
                <button onClick={() => { dispatch2('Add') }}>Add</button>
                <button onClick={() => { dispatch2('sub') }}>sub</button>
                <button onClick={() => { dispatch2('multiply') }}>multiply</button>
                <button onClick={() => { dispatch2('divide') }}>divide</button>
            </div>
            <br />
            <br />
            <br />
            <div>
                {count * count2}
            </div>
            <br />
            <br />
            {/* <div>
                <h1>check the condition</h1>
                {count > count2 &&
                    (<>
                        <h1>Count one is Higher</h1>
                    </>)}
                {count < count2 &&
                    (<>
                        <h1>count 2 is higher</h1>
                    </>)}
            </div> */}
            <div>
                {condCheck(count, count2)}
            </div>
        </>
    )
}

export default MultipleReducer