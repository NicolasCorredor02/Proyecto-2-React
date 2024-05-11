import React, { useState } from 'react'

function ShowHide() {

    const [show, setShow] = useState(true);

    const handleClick = ()=>{
        setShow(!show);
    };
  return (
    <div>
       {show && <h2>Hide me!</h2>}
       <button onClick={handleClick}>Hide Text</button>

    </div>
  )
}

export default ShowHide