import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_NEST_ROUTE } from '../Constants/URL';

function Test(props) {
    const [values, setValues] = useState();
    const { searchVal } = props;
    useEffect(() => {
        axios.get(API_NEST_ROUTE).then((res) => { setValues(res.data) })
    }, []);
    console.log(values);
    return (
        <div>
            {
                values?.filter((e) =>
                    (e.includes(searchVal)))
            }
        </div>
    )
}

export default Test