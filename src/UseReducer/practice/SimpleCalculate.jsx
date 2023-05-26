import React, { useReducer, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'


const initialState = {
    first: 0,
    second: 250,
};
const reducer = (prevState, action) => {

    switch (action.type) {
        case 'modulo': return { first: prevState.first + action.value1 }
        case 'multiply': return { first: prevState.first * action.value1 }
        // case 'dividend': return { first: prevState.first / action.value1 }
        case 'reset': return { first: action.value1 }
        default: return prevState;

    }
}
function SimpleCalculate() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const { register, handleSubmit, formState: { isDirty, isSubmitted } } = useForm();
    const [num, setnum] = useState();
    const ref = useRef(null);
    const reff = ref.current;
    console.log(reff)
    const onSubmit = (value) => {
        setnum(value)
    }
    console.log(num);
    console.log(count);


    return (
        <div>
            <div>
                <h1>Calculations</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input ref={ref} type='number' {...register("num1", { valueAsNumber: true })} />
                    <input ref={ref} type='number' {...register("num2", { valueAsNumber: true })} />
                    <input type='submit' />
                    <h1>Count is :{count.first}</h1>
                    <h1>Count is :{count.second}</h1>
                    <button onClick={() => {
                        if (isSubmitted && isDirty) {
                            dispatch({ type: 'modulo', value1: (num.num1) })
                        } else {
                            alert("please fill above input field")
                        }
                    }}>modulo</button>
                    <button onClick={() => {
                        if (isSubmitted && isDirty) { dispatch({ type: 'multiply', value1: (num.num2) }) }
                        else {
                            alert("please enter the value above field")
                        }

                    }}>multiply</button>
                    {/* <button onClick={() => { dispatch({ type: 'dividend', value1: (num.num2) }) }}>dividend</button> */}
                    <button onClick={() => { dispatch({ type: 'reset', value1: 0 }) }}>reset</button>
                </form>
            </div>
        </div>
    )
}

export default SimpleCalculate