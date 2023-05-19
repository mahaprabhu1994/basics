import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { API_MULTI } from '../Constants/URL';


function MultiStepForm() {
    const [step, setStep] = useState(0);
    const [Values, setValues] = useState();
    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm({ mode: "all" });



    const renderBtn = () => {
        if (step === 2) {
            return (
                <>
                    <button type='submit' onClick={() => { setStep(step + 1) }} >Create</button>
                </>
            )
        }
        else if (step > 2) {
            return (
                <>
                    <button type='button' onClick={() => { window.location.reload(true) }}>
                        <h1>Go Back to Home</h1>
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <button
                        disabled={!isValid}
                        type='button' onClick={() => { setStep(step + 1) }} >Next Step</button>
                </>
            )
        }
    }

    const onSubmit = (value) => {
        axios.post(API_MULTI, value)
        setValues(value)
    }
    console.log("form data", Values)
    return (
        <div>
            <h1>Multi-step</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    step === 0 &&
                    (
                        <section>
                            <input

                                {...register("name", { required: true })}
                                aria-invalid={errors.name ? "true" : "false"}
                                type='text' className='bg-green-100' placeholder='name' />
                            {errors.name?.type === 'required' && <p role="alert" className='text-red-400'>Name is required</p>}
                        </section>
                    )
                }
                {
                    step === 1 && (
                        <section>
                            <input
                                {...register("dept")}
                                type='text' className='bg-green-100' placeholder='dept' />
                        </section>
                    )
                }
                {
                    step === 2 && (
                        <section>
                            <input
                                {...register("agree")}
                                type='checkbox' />
                            <label>Please agree the tearms and conditions</label>
                        </section>
                    )
                }
                {renderBtn()}
                {
                    step === 3 && (
                        <section>
                            <h1>Success</h1>
                        </section>
                    )
                }

            </form>

            <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre>
        </div>
    )
}

export default MultiStepForm