import './Hero.css'
import hero from '../../assets/heroPic.svg'
import line1 from '../../assets/line1.svg'


function Hero() {
    const handleClick = () => {
        window.location.href = 'https://forms.gle/fjWtxNwRkrRShEJT6'; 
    };
    return(
        <>
            <div className="hero-container">
                <div className="hero-text">
                    <h1 className='title'>We <span className='red-text'>design</span> your <br/> path, in <span className='red-text'>tech</span> <br/> fields</h1>
                    <p className='text'>Welcome to our stands! We’re talented ESI students <br/>skilled in the latest technologies, here to help you design <br/> your path in tech fields and achieve your dreams.</p>
                    <div className="btn-container ">
                        <div className="rectangle top"></div>
                        <div className="rectangle bottom"></div>
                        <button className="joinus herobtn" onClick={handleClick}>Join us now!</button>
                    </div>  
                </div>
                <img src={hero} alt="Hero Image" className="hero-image"/>    
            </div>
            <img src={line1} alt="line1" className='line1' />
        </>
    )
}

export default Hero