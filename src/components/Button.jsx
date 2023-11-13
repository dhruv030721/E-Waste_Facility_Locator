import "./Button.css"

/* eslint-disable react/prop-types */
const CustomButton = ({text, onclick}) => {
    return (
        <div className = "ButtonDiv">
            <button className = "btn" onClick={onclick}>{text}</button>
        </div>
    )
}

export default CustomButton