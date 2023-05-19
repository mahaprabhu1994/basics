import React from 'react'
import { useForm } from 'react-hook-form';
import { API_USER } from '../Constants/URL';
import axios from 'axios';

function Modal(props) {
    const { register, handleSubmit } = useForm();

    //Edit the Value using popup
    const { FirstName, LastName, PhoneNumber, email, id } = props.formValue;

    const onSubmit = async (data) => {
        await axios.put(API_USER + id, data);
        window.location.reload(true)

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-slate-50 w-[400px] gap-2'>

                <input type="text" {...register('FirstName')} defaultValue={FirstName} className=' border-2 border-gray-600 border-spacing-2' placeholder='FirstName' />
                <input type="text" {...register('LastName')} defaultValue={LastName} className=' border-2 border-gray-600 border-spacing-2' placeholder='LastName' />
                <input type="text" {...register('PhoneNumber')} defaultValue={PhoneNumber} className=' border-2 border-gray-600 border-spacing-2' placeholder='Phone' />
                <input type="text" {...register('email')} defaultValue={email} className=' border-2 border-gray-600 border-spacing-2' placeholder='email' />

                <button type='submit'>edit</button>
            </form>
        </div>
    )
}

export default Modal