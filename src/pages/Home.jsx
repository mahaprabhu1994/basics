import React from 'react'
import Popup from 'reactjs-popup'
import Edit from '../CRUD/Edit';

function Home() {

    return (
        <div>

            <Popup trigger={<button> Trigger</button>} position="right center">
                <>
                    <div className="bg-green-200 ">
                        <h1>welcome</h1>
                    </div>
                </>
            </Popup>
        </div>
    )
}

export default Home