import React from "react";

function EyesOnMe(){
    function handleFocus(event){
        console.log('Good!')
    }
    function handleBlur(event){
        console.log('Hey!Eyes on me!')
    }

    return(
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>EYES ON ME</button>
        </div>
    )
}
export default EyesOnMe
