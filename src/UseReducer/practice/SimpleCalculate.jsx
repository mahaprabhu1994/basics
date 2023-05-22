import React, { useReducer, useState } from 'react'
import { useForm } from 'react-hook-form'


const initialState = {
    first: 0,
    second: 250,
};
const reducer = (prevState, action) => {

    switch (action.type) {
        case 'modulo': return { first: prevState.first + action.value }
        case 'multiply': return { first: prevState.first * action.value }
        case 'dividend': return { first: prevState.first / action.value }
        default: return prevState;

    }
}
function SimpleCalculate() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const { register, handleSubmit } = useForm();
    const [num, setnum] = useState();
    const onSubmit = (value) => {
        setnum(value)
    }
    console.log(num);
    console.log(count)
    return (
        <div>
            <div>
                <h1>Calculations</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type='number' {...register("num1", { valueAsNumber: true })} />
                    <input type='number' {...register("num2", { valueAsNumber: true })} />
                    <input type='submit' />
                </form>
                <h1>Count is :{count.first}</h1>
                <h1>Count is :{count.second}</h1>
                <button onClick={() => { dispatch({ type: 'modulo', value: (num.num1) }) }}>modulo</button>
                <button onClick={() => { dispatch({ type: 'multiply', value: (num.num2) }) }}>multiply</button>
                <button onClick={() => { dispatch({ type: 'dividend', value: (num.num2) }) }}>dividend</button>
                <button onClick={() => { dispatch('reset') }}>reset</button>
            </div>
        </div>
    )
}

export default SimpleCalculate