import React from 'react'
import { useForm } from 'react-hook-form'
import { API_NESTED_OBJ } from '../Constants/URL';
import axios from 'axios';

function Nstform(props) {
    const { register, handleSubmit } = useForm();
    const { name, age, address, funds, id } = props.FormValue;
    const { mf, stocks } = funds;
    //update
    const onSubmit = (editValue) => {
        axios.put(API_NESTED_OBJ + id, editValue);
        window.location.reload(true)
    }
    return (
        <div>
            <h1>NestedForm</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-[300px] gap-2">
                <input type="text" {...register("name")}
                    defaultValue={name}
                    className="bg-gray-300" />
                <input type="number" {...register("age", { valueAsNumber: true })}
                    defaultValue={age}
                    className="bg-gray-300" />
                <input type="text" {...register("address")}
                    defaultValue={address}
                    className="bg-gray-300" />
                <input type="text" {...register("funds.mf")}
                    defaultValue={mf}
                    className="bg-gray-300" />
                <input type="text" {...register("funds.stocks")}
                    defaultValue={stocks}
                    className="bg-gray-300" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Nstform