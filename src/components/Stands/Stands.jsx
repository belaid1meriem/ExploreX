import './Stands.css';
import AiStand from '../AiStand/AiStand';
import GameDevStand from '../GameDevStand/GameDevStand'
import WebDevStand from '../WebDevStand/WebDevStand';

function Stands({openPopUp}) {
    return(

        <div className="stands-container">
            <h1 className='Fields'>Fields</h1>
            <AiStand openPopUp={openPopUp}/>
            <GameDevStand openPopUp={openPopUp}/>
            <WebDevStand openPopUp={openPopUp}/>
        </div>
        
    )
}

export default Stands;