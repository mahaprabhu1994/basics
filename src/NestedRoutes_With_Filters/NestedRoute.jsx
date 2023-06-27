import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { API_NEST_ROUTE } from '../Constants/URL';

function NestedRoute() {
    const [values, setValues] = useState([]);
    const [array, setArray] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        axios.get(API_NEST_ROUTE).then((res) => { setValues(res.data) })
    }, []);

    return (
        <div>
            <h1>NestedRoute</h1>
            <h1>value 1</h1>
            <div>
                <form>
                    <input className='border border-red-300' type='text' onChange={(e) => { setSearch(e.target.value) }} />
                </form>
            </div>
            <div className='flex gap-2 flex-wrap'>

                {
                    values.filter((f) => { return (f.name.toLowerCase().includes(search)) }).map((item) => {
                        return (
                            <>
                                <div key={item.id} className='bg-green-100 w-[200px] h-[100px] border border-stone-900 '>

                                    <h1>{item.id}</h1>
                                    <h1>{item.name}</h1>
                                    <button className='bg-red-100 p-2'>
                                        <Popup trigger={<button onClick={() => { setArray(item.value) }}> View</button>} position="right center">
                                            <div className='bg-red-400'>
                                                {item.value?.map((e) => {
                                                    return (
                                                        <>
                                                            <div key={e.id} className=''>
                                                                <h1>array list{e}</h1>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </Popup>
                                    </button>
                                    <button className='bg-blue-300 p-2'>
                                        <Link to={`/userlist/${item.id}`} state={item}>View</Link>
                                    </button>
                                </div>
                            </>
                        )
                    }
                    )
                }
            </div>
        </div>

    )
}

export default NestedRoute