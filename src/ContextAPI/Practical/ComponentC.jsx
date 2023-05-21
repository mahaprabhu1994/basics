import React from 'react'
import { UserContext } from './Parent'


function ComponentC() {
    //using 3ed step using consumer method 
    return (
        <div>
            Get the Props from Parent to ComponentC directly
            <div>
                <UserContext.Consumer>
                    {(user) => {
                        return (
                            <>
                                <h1>Hello {user} !!</h1>
                            </>
                        )
                    }}
                </UserContext.Consumer>
            </div>

        </div>
    )
}

export default ComponentC