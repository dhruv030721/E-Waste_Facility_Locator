/* eslint-disable react/prop-types */
import "./InputFields.css"

const Field = ({iconpath, placeholder, type}) => {
    let idName = placeholder + "Field";
    return (
        <div className = "InputFields">
            <div className="FieldContainer">
                <div className = "Icon"> 
                    <img src={iconpath} alt='Icon'/>
                </div>
                <div className = "Field"> 
                    <input type={type} className="Field" id={idName} placeholder={placeholder}/>
                </div>
            </div>
        </div>
    )
}

export default Field