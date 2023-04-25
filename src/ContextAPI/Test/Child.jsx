import React from 'react'
import GrandChild from './GrandChild'

function Child() {
    return (
        <div className='w-5/6 h-32 bg-red-200'>
            <h1>Child</h1>
            <GrandChild />
        </div>
    )
}

export default Child