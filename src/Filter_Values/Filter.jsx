import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { API_NEST_ROUTE } from '../Constants/URL';


function Filter() {
    const [values, setValues] = useState();
    const [style, setStyle] = useState(true);
    const [array, setArray] = useState([]);
    useEffect(() => {
        axios.get(API_NEST_ROUTE).then((res) => { setValues(res.data) })
    }, []);
    console.log(values);

    const test = 'masddddddddhah'


    return (
        <>

            <div>
                {
                    values?.map((e) => {
                        return (
                            <>
                                <div className='bg-green-100 w-[200px] h-[100px] border border-stone-900 '>

                                    <h1>{e.id}</h1>
                                    <h1>{e.name}</h1>
                                    <button className='bg-red-100 p-2'>
                                        <Popup trigger={<button onClick={() => { setArray(e.value) }}> View</button>} position="right center">
                                            <div className='bg-red-400'>
                                                {e.value?.map((e) => {
                                                    return (
                                                        <>
                                                            <h1>array list{e}</h1>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </Popup>
                                    </button>
                                    <button className='bg-blue-300 p-2'>
                                        <Link to={`/userlist/${e.id}`} state={e}>View</Link>
                                    </button>
                                </div>
                            </>
                        )
                    }
                    )
                }
            </div>
            {/* <div>
                {values.filter(name => name.includes(search)).map(filteredName => (
                    <li>
                        {filteredName}
                    </li>
                ))}
            </div> */}

            <div onClick={() => { setStyle(!style) }} className={`${!style ? "none" : "block"}`}>X</div>
            <h1 className={` ${style ? "block" : "none"}`} >Welcome</h1>

            {/* <h1 className={`${test.substring(test.length - 4) === "high" ? "bg-green-200" : "bg-red-100"}`}>mahaprabhu</h1> */}
            <h1 className={`${test.includes('high') ? "bg-green-200" : "bg-red-100"}`}>mahaprabhu</h1>

        </>
    );
}

export default Filter;