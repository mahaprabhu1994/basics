import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Details() {
    return (
        <>
            <div >
                <nav className='w-full h-[50px] bg-slate-100 flex mx-auto justify-center gap-10 mt-[100px]'>

                    <NavLink to='basicdetails' className='my-auto'  >Details</NavLink>
                    <NavLink to='address' className='my-auto'>Address</NavLink>
                    <NavLink to='mfplans' className='my-auto'>Mutual Fund Plans</NavLink>
                </nav>
            </div>
            <Outlet />
        </>

    )
}

export default Details