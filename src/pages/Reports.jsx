import React, { useEffect, useState } from 'react'
import { API_USER } from '../Constants/URL'
import axios from 'axios'
import Popup from 'reactjs-popup';
import Modal from '../CRUD/Modal';
function Reports() {
    const [data, setValue] = useState([]);



    //Get the Value from DB;
    useEffect(() => {
        axios.get(API_USER).then((res) => { setValue(res.data) })
    }, [])
    console.log(data)
    //delete the user
    const deleteUser = (id) => {
        axios.delete(API_USER + id);
        window.location.reload(true)
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>PhoneNumber</td>
                        <td>email</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </thead>
                <tbody>


                    {data.map((value) => {
                        return (
                            <>
                                <tr key={value.id}>
                                    <td>{value.FirstName}</td>
                                    <td>{value.LastName}</td>
                                    <td>{value.PhoneNumber}</td>
                                    <td>{value.email}</td>
                                    {/* <td>
                                        <button><Link to={'/edit'} state={value} >Edit</Link></button>
                                    </td> */}

                                    <td>
                                        <Popup trigger={<button> Edit</button>} position="bottom center">
                                            <>
                                                <div className="bg-green-200 p-4">
                                                    <Modal formValue={value} />
                                                </div>
                                            </>
                                        </Popup>
                                    </td>


                                    <td >
                                        <button onClick={() => { deleteUser(value.id) }}>Delete</button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>


        </div>
    )
}

export default Reports