import React from "react";


function Keypad (){

    function handleChange(event){
        console.log("Entering password...")
    }
    return (
        <div>
         <input type="password" onChange={handleChange}  text="Entering password..."/>
        </div>
    )
}

export default Keypad;