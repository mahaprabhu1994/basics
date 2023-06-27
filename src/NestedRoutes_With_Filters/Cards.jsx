import React from 'react';
import { useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';

function Cards() {
    const { productid } = useParams();
    const location = useLocation();
    console.log(location);
    const name = location.state.name;
    const values = location.state.value;
    return (
        <div>
            <h1>Card Container</h1>
            <h1>{productid}</h1>
            <h1>{name}</h1>
            <div>
                {
                    values.map(e => {
                        return (
                            <>
                                <h1>{e}</h1>
                            </>
                        )
                    })
                }
            </div>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default Cards