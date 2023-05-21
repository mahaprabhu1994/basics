import React from 'react'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

function ComponentB() {
    return (
        <div>
            <ComponentC />
            <ComponentD />
        </div>
    )
}

export default ComponentB