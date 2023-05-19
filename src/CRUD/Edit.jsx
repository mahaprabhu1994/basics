import React from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router';
import { API_USER } from '../Constants/URL';

function Edit() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const editValue = location.state;
    console.log(location);
    const id = editValue.id;
    const name = editValue.FirstName;
    const lastname = editValue.LastName;
    const email = editValue.email;
    const phone = editValue.PhoneNumber;

    // const navigate = useNavigate();
    const onSubmit = async (data) => {
        await axios.put(API_USER + id, data);
        navigate('/reports')
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-slate-50 w-[400px] gap-2'>

                <input type="text" {...register('FirstName')} defaultValue={name} className=' border-2 border-gray-600 border-spacing-2' placeholder='FirstName' />
                <input type="text" {...register('LastName')} defaultValue={lastname} className=' border-2 border-gray-600 border-spacing-2' placeholder='LastName' />
                <input type="text" {...register('PhoneNumber')} defaultValue={phone} className=' border-2 border-gray-600 border-spacing-2' placeholder='Phone' />
                <input type="text" {...register('email')} defaultValue={email} className=' border-2 border-gray-600 border-spacing-2' placeholder='email' />

                <button type='submit'>edit</button>
            </form>
        </div>
    )
}

export default Edit