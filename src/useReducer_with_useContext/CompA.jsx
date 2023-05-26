import React, { useContext } from 'react';
import { CountContext } from './Parent';
function CompA() {
    const countContext = useContext(CountContext);
    console.log(countContext);
    return (
        <div>CompA</div>
    )
}

export default CompA