import React from 'react'
import { useForm } from 'react-hook-form'
import { API_USER } from '../Constants/URL'
import axios from "axios"
function Create() {
    const { register, handleSubmit } = useForm();
    // Post the Date into DB;
    const onSubmit = async (data) => {
        await axios.post(API_USER, data);
        window.location.reload(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-slate-50 w-[400px] gap-2'>

                <input type="text" {...register('FirstName')} className=' border-2 border-gray-600 border-spacing-2' placeholder='FirstName' />
                <input type="text" {...register('LastName')} className=' border-2 border-gray-600 border-spacing-2' placeholder='LastName' />
                <input type="text" {...register('PhoneNumber')} className=' border-2 border-gray-600 border-spacing-2' placeholder='Phone' />
                <input type="text" {...register('email')} className=' border-2 border-gray-600 border-spacing-2' placeholder='email' />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Create