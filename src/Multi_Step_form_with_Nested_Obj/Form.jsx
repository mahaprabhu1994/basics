import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { API_MULTI_NEST } from '../Constants/URL';
import axios from 'axios';
import Navbar from '../Components/Navbar';

function Form() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            age: 0,
            address: {
                resAddress: '',
                offAddress: '',
            },
            agree: false,
            message: ''
        }
    });
    const [step, setStep] = useState(0);
    const [getValue, setGetValue] = useState([]);

    const onSubmit = (value) => {
        axios.post(API_MULTI_NEST, value);

    }

    useEffect(() => {
        axios.get(API_MULTI_NEST).then((res) => { setGetValue(res.data) })
    }, [])

    //switch case:
    const switchCase = () => {
        switch (step) {
            case 0:
            case 1:
            case 2:
            case 3: return <button type='button' onClick={() => {
                setStep
                    (step + 1)
            }}>
                Next Step
            </button>;
                break;
            case 4:
                return <button type='button' onClick={() => {
                    setStep
                        (step + 1)
                }}>
                    Create Account
                </button>;
                break;
            default: return <button type='submit' >
                <h1>Welcome to Avallis !! </h1>
                <Navbar />
            </button>;


        }
    }

    return (
        <div>
            <h1>Multi step Form with nested Objects{step}</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                {
                    step === 0 && (
                        <section>
                            <input type='text' {...register("name")} className='bg-red-100 border border-red-950' />
                        </section>
                    )
                }
                {
                    step === 1 && (
                        <section >
                            <input type='number' {...register("age", { valueAsNumber: true })} className='bg-red-100 border border-red-950' />
                        </section>
                    )
                }
                {
                    step === 2 && (
                        <section className='flex '>
                            <input type='text' {...register("address.resAddress")} className='bg-red-100 border border-red-950 ' />
                            <input type='text' {...register("address.offAddress")} className='bg-red-100 border border-red-950 ' />
                        </section>
                    )
                }
                {
                    step === 3 && (
                        <section>
                            <input type='checkbox' {...register("agree")}
                                className='bg-red-100 border border-red-950' />
                        </section>
                    )
                }
                {
                    step === 4 && (
                        <section>
                            <input type='text' {...register("message")}
                                className='bg-red-100 border border-red-950'
                            />
                        </section>
                    )
                }
                {switchCase()}
            </form>


        </div>
    )
}

export default Form