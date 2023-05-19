import React, { useState } from 'react'

function MultiStepForm() {
    const [step, setStep] = useState(0);

    console.log(step)
    return (
        <div>
            <h1>Multi-step</h1>
            {
                step
            }
            <form>
                <input type='text' className='bg-green-100' />
                <input type='submit' onClick={() => { setStep(step + 1) }} />
            </form>
        </div>
    )
}

export default MultiStepForm