import './home_title.css';


const HomeTitle = () => {
    return ( 
        <>
            <div id="home-container">
                <div className="home-title">
                <h1>Revive Electronics,</h1>
                <h1>Save our Planet</h1>
                <p>"For every device recycled with us, we break the chain of pollution to Earth. Together, let's turn e-waste into a promise for a cleaner planet. Act now for a sustainable tomorrow!"</p>
                </div>
                <div className="home-button-section">
                <button id="get-news" className='btn'>Get News</button>
                <button id="locate-facility" className='btn'>Locate Facility</button>
                </div>
            </div>
        </>
     );
}
 
export default HomeTitle;