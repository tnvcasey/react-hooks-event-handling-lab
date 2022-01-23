import React from "react"

function Keypad(){
    return(
        <input 
            type="password"
            name="search"
            onChange={(e) => console.log("Entering password...")}
        />
    )
}

export default Keypad