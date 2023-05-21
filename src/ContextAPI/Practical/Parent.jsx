import React, { createContext } from 'react'
import ComponentA from './ComponentA'

//create context
export const UserContext = createContext();
export const ValueContext = createContext();


function Parent() {
    return (
        <div>

            <UserContext.Provider value={"Mahaprabhu"}>
                <ValueContext.Provider value={28}>
                    <ComponentA />
                </ValueContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Parent