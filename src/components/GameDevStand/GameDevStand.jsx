import './GameDevStand.css'
import game1 from '../../assets/game1.png';
// import game2 from '../../assets/YASUO.png';

function GameDevStand({openPopUp}) {
    return(
        <div className="game-container">

            <div className="game-text">
                <h1 className='title'> <span className='red-text'>Game</span> <br /> Development <br /> Stand</h1>
                <p className='text'>In this game development Stand, <span className='bold'>Takaieddine Douibi</span> will <br /> Give a clear image of the field by elaborating <br /> prerequisites,common mistakes,projects and Give <br /> a clear roadmap costumized for our community(esi)</p>
                <div className="btn-container">
                    <div className="rectangle top"></div>
                    <div className="rectangle bottom"></div>
                    <button className="joinus herobtn" onClick={openPopUp}>Learn more</button>
                </div>
            </div> 

            <div>
                <img src={game1} alt="game" className='game-pic' /> 
                {/* <img src={game2} alt="game" className='game-pic messi' /> */}
            </div>
             

   
        </div>
    )
}

export default GameDevStand;