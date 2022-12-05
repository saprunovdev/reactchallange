import React from "react";

const Button = (props) => {
    const {action, value} = props

    return(
        <button onClick={action}>
            {value}
        </button>
    )
}

export {Button};