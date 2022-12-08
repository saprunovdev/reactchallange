import React from "react";

//type, value, placeholder, reruired


const InputField = ({type, title, value, placeholder, id}) => {
    
        return(
            <div>
                <label htmlFor={id}>{title.toUpperCase()}</label><br/>
                <input 
                    type={type}
                    value={value}
                    id = {id}
                    placeholder={placeholder}
                    required
                    >
                </input>
            </div>
        )
    
}

export {InputField} ;