import React from 'react'

function Address({ formvalue }) {
    console.log(formvalue)
    return (
        <div>

            <h1>Address</h1>
            <form>
                <input placeholder='Doorno' type='text' />
                <input placeholder='streetname' type='text' />
                <input placeholder='area' type='text' />
                <input placeholder='city' type='text' />
                <input placeholder='district' type='text' />
                <input placeholder='state' type='text' />
                <input placeholder='country' type='text' />
                <input placeholder='pincode' type='number' />
            </form>
        </div>
    )
}

export default Address