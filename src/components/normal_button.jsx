import './normal_button.css'


const NormalButton = ({text, onclick}) => {
    return ( 
        <>
            <button id="btn"  className='btn'>{text}</button>
        </>
     );
}
 
export default NormalButton;