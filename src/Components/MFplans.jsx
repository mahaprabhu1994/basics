import React from 'react'

function MFplans(props) {
    const { children, values, age, aggaylist, objectlist } = props;
    // console.log(children)
    // console.log(values)
    return (
        <>
            <div>
                {children}
            </div>
            <div>
                {values.name}
                {values.email}{values.dob}{values.phoneNumber}
            </div>
            <div>
                {age}
            </div>
            <div>
                {aggaylist.map((item) => {
                    return (<div key={item}><h1>{item}</h1></div>)
                })}
            </div>
            <div>
                {objectlist.marks}
            </div>

        </>
    )
}

export default MFplans