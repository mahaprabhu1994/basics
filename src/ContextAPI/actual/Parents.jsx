import React, { useState } from 'react'
import Child from './Child'
function Parents() {
    // const name = "Mahaprabhu";
    const [name, setName] = useState('Arun');
    const [mark, setMark] = useState(false);
    const markFunc = () => {
        setMark(!mark);
    }
    return (
        <div className='bg-blue-200 h-[400px] '>
            <h1>Parent Component</h1>
            <h1>{name}</h1>
            <Child
                name={name}
                mark={mark}
                markFunc={markFunc}
            />
        </div>
    )
}

export default Parents