import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_NEST_ROUTE } from '../Constants/URL';

function FilterComponents(props) {
    const [values, setValues] = useState();
    useEffect(() => {
        axios.get(API_NEST_ROUTE).then((res) => { setValues(res.data) })
    }, []);
    console.log(values);
    const { searchVal } = props;
    return (
        <>
            <div>FilterComponents {searchVal}</div>
        </>
    )
}

export default FilterComponents