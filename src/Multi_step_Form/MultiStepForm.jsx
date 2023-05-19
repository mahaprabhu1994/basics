import React, { useState } from 'react'

function MultiStepForm() {
    const [step, setStep] = useState(0);


    const renderBtn = () => {
        if (step > 2) {
            return (
                <>
                    nice !!
                </>
            )
        } else {
            return (
                <>
                    <button type='button' onClick={() => { setStep(step + 1) }} >Next Step</button>
                </>
            )
        }
    }

    console.log(step)
    return (
        <div>
            <h1>Multi-step</h1>
            <form>
                {
                    step === 0 &&
                    (
                        <section>
                            <input type='text' className='bg-green-100' placeholder='name' />
                        </section>
                    )
                }
                {
                    step === 1 && (
                        <section>
                            <input type='text' className='bg-green-100' placeholder='dept' />
                        </section>
                    )
                }
                {
                    step === 2 && (
                        <section>
                            <input type='checkbox' />
                            <label>Please agree the tearms and conditions</label>
                        </section>
                    )
                }
                {
                    step === 3 && (
                        <section>
                            <h1>Success</h1>
                        </section>
                    )
                }
                {renderBtn()}

            </form>
        </div>
    )
}

export default MultiStepForm