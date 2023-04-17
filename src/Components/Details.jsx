import React from 'react'
import { useForm } from 'react-hook-form'

function Details() {
    const { register } = useForm();
    return (
        <div>
            <input
                {...register("name")}
                placeholder='Name' className='h-[55px] text-center border-solid border-gray-300 border-2' />
            <input
                {...register("phoneNumber")}
                placeholder='Phone Number' className='h-[55px] text-center border-solid border-gray-300 border-2' />
            <input
                {...register("email")}
                placeholder='Email Id' className='h-[55px] text-center border-solid border-gray-300 border-2' />
            <input
                {...register("dob")}
                placeholder='D.O.B' className='h-[55px] text-center border-solid border-gray-300 border-2' />
        </div>
    )
}

export default Details