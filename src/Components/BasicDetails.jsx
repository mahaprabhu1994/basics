import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useForm } from "react-hook-form";
import Address from './Address';
import MFplans from './MFplans';
import useToggle from '../CostomHooks/useToggle';
import Plans from './Plans';
import Details from './Details';

function BasicDetails() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [formValue, setFormValue] = useState({
        name: '',
        phoneNumber: 8110055500,
        email: "maha@gmail.com",
        dob: "30/10/1994",
    });
    const [value0, togFunc0] = useToggle(false);
    const [value1, togFunc1] = useToggle(false);
    const [value2, togFunc2] = useToggle(false);



    const onSubmit = (e) => {
        setFormValue(e);
        // navigate('/details/mfplans');
    }
    const namevalue = 'maha is passing through children special props';
    const age = 18;
    const aggaylist = ['maha', 'arun', 'ravi'];
    const objectlist = {
        marks: 100,
        result: true,
    };

    // console.log(namevalue)
    // console.log(age);
    // console.log(aggaylist);
    // console.log(objectlist);
    return (
        <div>
            <form className='flex flex-col w-[350px] h-[400px] shadow-sm rounded-sm justify-center m-auto ' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <button onClick={togFunc0}>Add Details{value0 ? `-` : `+`}</button>
                    {value0 && <>
                        <Details />
                    </>}
                </div>
                <div>
                    <button onClick={togFunc1}>Add Address{value1 ? `-` : `+`}</button>
                    {value1 && <>
                        <Address />
                    </>}
                </div>
                <div>
                    <button onClick={togFunc2}>Add Plans{value2 ? `-` : `+`}</button>
                    {value2 && <>
                        <Plans />
                    </>}
                </div>
                <button type='submit' className='bg-blue-200 w-[100px] h-[55px]  mx-auto ' formvalue={formValue} ><h1 className='text-center'>Next</h1>  </button>
            </form>
            {/* passing props to other components */}
            {/* <MFplans values={formValue} age={age} aggaylist={aggaylist} objectlist={objectlist}>
                {namevalue}
            </MFplans> */}




        </div>
    )
}

export default BasicDetails



