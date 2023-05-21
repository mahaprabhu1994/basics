import React from 'react'

function GrandChild(props) {
    const { name, mark, markFunc } = props;

    return (
        <div className='bg-green-200 h-[200px] '>
            <h1>Grand Child Component</h1>

            <div>{name}</div>
            <h1>{mark ? <>Hello {name}</> : <>Please Login</>}</h1>
            <button onClick={markFunc} className='w-[100px] h-[50px] bg-blue-500'>{mark ? <>logout</> : <>Login</>}</button>
        </div>
    )
}

export default GrandChild