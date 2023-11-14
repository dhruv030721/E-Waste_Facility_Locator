/* eslint-disable react/prop-types */
import "./InputFields.css"

const Field = ({iconpath, placeholder, type, value, onChange, isValid }) => {
    let idName = placeholder + "Field";
    const containerClass = isValid ? 'field-container' : 'field-container invalid';

    return (
        <div className={`InputFields ${containerClass}`}>
            <div className="FieldContainer">
                <div className = "Icon"> 
                    <img src={iconpath} alt='Icon'/>
                </div>
                <div className = "Field"> 
                    <input 
                        type={type} 
                        className="Field" 
                        id={idName} 
                        placeholder={placeholder} 
                        value={value}
                        onChange={onChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default Field