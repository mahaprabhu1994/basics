import React from 'react'
import UserContainer from './UserContainer'

function NavLink(props) {
    const { name, toggleFunc, toggle } = props;
    // console.log(name)

    return (
        <div className='w-full h-[50px] bg-blue-100 flex justify-between'>
            <ul className='flex gap-3 bg-slate-800 text-white'>
                <li >
                    <a href='www.google.com' >Home</a>
                </li>
                <li >
                    <a href='www.google.com'>About</a>
                </li>
            </ul>
            <UserContainer
                name={name}
                toggleFunc={toggleFunc}
                toggle={toggle}

            />
        </div>
    )
}

export default NavLink