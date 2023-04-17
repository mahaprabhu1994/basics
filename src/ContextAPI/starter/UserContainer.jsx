import React from 'react'

function UserContainer(props) {
    const { name, toggleFunc, toggle } = props;
    console.log(toggle);
    console.log(name)
    return (
        <div className='flex'>

            <div className='m-auto pr-2'>
                {toggle ?
                    <>
                        <h1>Hi {name}</h1>
                    </> :
                    <>
                        <h1>Please login here</h1>
                    </>}
            </div>
            <div className='m-auto text-center justify-center flex
             align-middle'>
                <button onClick={toggleFunc}><h1 className='w-[100px] h-[50px] text-center bg-slate-700 rounded-sm shadow-md '>{toggle ? <><h1>logout</h1></> : <h1>login</h1>}</h1></button>
            </div>
        </div>
    )
}

export default UserContainer