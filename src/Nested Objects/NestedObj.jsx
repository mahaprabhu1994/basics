import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { API_NESTED_OBJ } from '../Constants/URL';
import axios from 'axios';
import Nstform from './Nstform';
import Popup from 'reactjs-popup';

function NestedForm() {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            age: '',
            address: '',
            funds: {
                mf: '',
                stocks: ''
            }
        }
    });
    const [nestedObj, setNestedObj] = useState();

    useEffect(() => {
        axios.get(API_NESTED_OBJ).then((res) => {
            setNestedObj
                (res.data)
        })
    }, []);
    console.log(nestedObj)

    const onSubmit = (value) => {
        axios.post(API_NESTED_OBJ, value);
        window.location.reload(true)
    }


    //Delete
    const DeleteFunc = (id) => {
        axios.delete(API_NESTED_OBJ + id)
        window.location.reload(true)
    }
    return (
        <div>
            <h1>NestedForm</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[300px] gap-2">
                <input type="text" {...register("name")} className="bg-gray-300" />
                <input type="number" {...register("age", { valueAsNumber: true })} className="bg-gray-300" />
                <input type="text" {...register("address")} className="bg-gray-300" />
                <input type="text" {...register("funds.mf")} className="bg-gray-300" />
                <input type="text" {...register("funds.stocks")} className="bg-gray-300" />
                <input type="submit" />
            </form>
            <div>
                <h1>Nested obj Table</h1>
                <div>
                    <table>
                        <thead className="bg-green-100 " >
                            <tr>
                                <td>
                                    <h4>Name</h4>
                                </td>
                                <td>
                                    <h4>Age</h4>
                                </td>
                                <td>
                                    <h4>Address</h4>
                                </td>
                                <td>
                                    <tr>Funds</tr>
                                    <tr>
                                        <td><h4>MF</h4></td>
                                        <td><h4>Stocks</h4></td>
                                    </tr>
                                </td>
                                <td>
                                    <h1>Edit</h1>
                                </td>
                                <td>
                                    <h1>Delete</h1>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            {nestedObj?.map((e) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{e.name}</td>
                                            <td>{e.age}</td>
                                            <td>{e.address}</td>
                                            <td>
                                                <tr>
                                                    <td>{e.funds.mf}</td>
                                                    <td>{e.funds.stocks}</td>
                                                </tr>
                                            </td>
                                            <td>
                                                <button >
                                                    <Popup trigger={<button> Edit</button>} position=" center">
                                                        <Nstform FormValue={e} />
                                                    </Popup>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => { DeleteFunc(e.id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody >
                    </table>
                </div>
            </div>
        </div>
    )
}

export default NestedForm