import './WebDevStand.css'
import webdev from "../../assets/web.jpg"
function WebDevStand({openPopUp}) {
    return(
        <div className="web-container">

            <img src={webdev} alt="webdev" className='web-pic' /> 
            <div className="web-text">
                <h1 className='title'> <span className='red-text'>Front-end</span> <br /> & <span className='red-text'>Back-end</span> <br /> developement</h1>
                <p className='text'>In this front end & back end Stand, <span className='bold'>Chaben Wail</span> & <br /> <span className='bold'>Boutemin Djawed</span> will Give a clear image of the field by <br /> elaborating prerequisites,common mistakes,projects and <br /> Give a clear roadmap costumized for our community(esi)</p>
                <div className="btn-container">
                    <div className="rectangle top"></div>
                    <div className="rectangle bottom"></div>
                    <button className="joinus herobtn" onClick={openPopUp}>Learn more</button>
                </div>
            </div>    
        </div>
    )
}

export default WebDevStand;