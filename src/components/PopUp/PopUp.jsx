import './PopUp.css';
import { IoMdCloseCircle } from "react-icons/io";


function PopUp({closePopUp}) {
    return(
        <div className="pop-up-container">
            <div className="pop-up-card">
                <IoMdCloseCircle className='close-icon' onClick={closePopUp}/>
                <h1>Stay tuned!</h1>
                <br />
                <h2>Something Great is coming!</h2>
                
            </div>

        </div>
    )
}

export default PopUp;