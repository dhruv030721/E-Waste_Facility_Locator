import "./Button.css"

/* eslint-disable react/prop-types */
const CustomButton = ({text}) => {
    return (
        <div className = "ButtonDiv">
            <button className = "btn">{text}</button>
        </div>
    )
}

export default CustomButton