import React from 'react'
import GrandChild from './GrandChild';

function Child(props) {

    const { name, mark, markFunc } = props;

    return (
        <div className='bg-red-200 h-[300px] '>
            <h1>Child Component</h1>
            <h1>{name}</h1>
            <GrandChild name={name} mark={mark} markFunc={markFunc} />
        </div>
    )
}

export default Child