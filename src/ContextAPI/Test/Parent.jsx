import React from 'react'
import Child from './Child'
import { createContext } from 'react'

export const parentContext = createContext();

function Parent() {
    console.log(parentContext.Provider)

    // State values
    const age = 28;

    // func
    const setAge = (e) => {
        return e * 2
    }
    console.log(age)
    return (
        <parentContext.Provider value={{ age, setAge }}>

            <div className='w-full h-52 bg-green-400'>
                <h1>Parent</h1>
                <Child />
            </div>
        </parentContext.Provider>
    )
}

export default Parent