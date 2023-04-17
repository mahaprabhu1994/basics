import React, { useState } from 'react'
import NavLink from './NavLink'


function Navbar2() {
  // const [name, setName] = useState( 'mahaprabhu' );
  // const mark = 433;
  const name = "maha"

  const [toggle, setToggle] = useState(false);
  const toggleFunc = () => {
    setToggle(!toggle);
    console.log(toggle)

  }


  // const [marks, setMarks] = useState({ name: 'maha' })
  // console.log(mark)

  return (
    <div>
      <h1>Navbar2</h1>
      <NavLink
        name={name}
        toggleFunc={toggleFunc}
        toggle={toggle}

      />
    </div>
  )
}

export default Navbar2