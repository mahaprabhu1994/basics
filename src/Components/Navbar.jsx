import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {


    return (
        <div className='w-full h-[60px] bg-stone-200 flex justify-center '>
            <Link to='/' className=' m-auto'>Home</Link>
            <Link to='/contextapi' className=' m-auto'>Prop Drilling</Link>
            <Link to='/crud' className=' m-auto'>Create</Link>
            <Link to='/reports' className=' m-auto'>Reports</Link>
        </div>
    )
}

export default Navbar