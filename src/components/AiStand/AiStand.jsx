import './AiStand.css';
import ai from '../../assets/ai.svg';


function AiStand({openPopUp}) {
    return(
        <div className="ai-container">

            <img src={ai} alt="ai" className='ai-pic' /> 
            <div className="ai-text">
                <h1 className='title'> <span className='red-text'>AI</span>-<br />  Artificial Intelligence Stand</h1>
                <p className='text'>In this AI Stand, <span className='bold'>Aimen Boukhari</span> will Give a clear image of the <br /> field by elaborating prerequisites,common mistakes,projects and <br /> Give a clear roadmap costumized for our community(esi)</p>
                <div className="btn-container">
                    <div className="rectangle top"></div>
                    <div className="rectangle bottom"></div>
                    <button className="joinus herobtn" onClick={openPopUp}>Learn more</button>
                </div>
            </div>    
        </div>
    )
}

export default AiStand;