import React from 'react'
import { useForm } from 'react-hook-form'
import { API_USER } from '../Constants/URL'
import axios from "axios"
import Reports from '../pages/Reports';

function Create(props) {
    const { register, handleSubmit } = useForm();
    // Post the Data into DB;
    const onSubmit = async (data) => {
        console.log(data)
        await axios.post(API_USER, data);
        window.location.reload(true)
    }


    console.log(props)
    return (
        <>
            <div className="w-[400px] h-[200px] bg-green-200 m-auto justify-center ">
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-slate-50 w-[400px] h-full gap-2 m-auto my-auto align-middle items-center justify-items-center'>

                    <input
                        type="text"

                        {...register('FirstName')}
                        className=' border-2 border-gray-600 border-spacing-2'
                        placeholder='FirstName' />
                    <input type="text"

                        {...register('LastName')}
                        className=' border-2 border-gray-600 border-spacing-2'
                        placeholder='LastName' />
                    <input type="text"

                        {...register('PhoneNumber')}
                        className=' border-2 border-gray-600 border-spacing-2'
                        placeholder='Phone' />
                    <input type="text"

                        {...register('email')}
                        className=' border-2 border-gray-600 border-spacing-2'
                        placeholder='email' />

                    <button type='submit'>Submit</button>
                </form>
            </div>
            <br />
            <br />
            <br />
            <Reports />
        </>
    )
}

export default Create