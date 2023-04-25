import React, { useState } from 'react'
import { useContext } from 'react'
import { parentContext } from './Parent';
import { useForm } from 'react-hook-form';
import { createContext } from 'react';
import { Link } from 'react-router-dom';

export const calculateContext = createContext();

export const useCalculate = () => useContext(calculateContext);


function GrandChild() {
    //React hook form
    const { register, handleSubmit } = useForm();
    // contextAPI
    const values = useContext(parentContext);
    //UseState Hook
    const [entervalue, setEnterValue] = useState(0);


    const formValue = handleSubmit((e) => {
        setEnterValue(e.age)
    })



    return (
        <calculateContext.Provider value={{ entervalue }}>

            <div className='bg-blue-200 w-1/2 h-24'>
                <form onSubmit={formValue}>
                    <input type='number' {...register("age", { valueAsNumber: true, })} />
                    <button type='submit'>Calculate</button>
                </form>
                <h1>GrandChild age : {values.age}</h1>
                <h1>GrandChild SetAge function : {values.setAge(entervalue)}</h1>

                <Link to='/reports' className=' m-auto'>Reports</Link>
            </div >
        </calculateContext.Provider>
    )
}

export default GrandChild