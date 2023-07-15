import React from "react"

const Button = (props) => {
    return (
        <div onClick={props.onClick} className={props.className}>
            <h1>
                {props.children}
            </h1>
        </div>
    )
}


export default Button;