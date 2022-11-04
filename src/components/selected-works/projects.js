import './projects.css';
import Laptop from './laptop.png';
import RPS from './RPS-Mockup.png';
import Hulu from './Hulu-Mockup.png';
import Weather from './Weather-Mockup.png';
import CSS from './CSS-Mockup.png';
import GFX from './Design-Mockup.png';
import Portfolio from './portfolio-mockup.png';

export const Projects = () => {

return (
    <div id="works" className='projects-container'>
        <div className='title'>
            <span  className="project-dot"></span>
            <h2>Selected Works</h2>
        </div>
        <div className='card-containers'>
            <div className='left-container'>
                <div className='card'>
                    <h3>Rock, Paper, Scissors</h3>
                    <p>Design, HTML, CSS, JavaScript, Illustration</p>
                    <img src={RPS} alt={'Rock, Paper, Scissors project'} />
                    <div className='project-buttons'>
                        <a href='https://mannylerma.github.io/rock-paper-scissors-v2/' target="_blank"><button>Live</button></a>
                        <a href='https://github.com/MannyLerma/rock-paper-scissors-v2' target="_blank"><button>Github</button></a>
                    </div>
                </div>
                
            </div>
            <div className='right-container'>
                <div className='card'>
                <h3>Hulu Clone</h3>
                <p>HTML, CSS, JavaScript</p>
                <img src={Hulu} />
                <div className='project-buttons'>
                        <a href='https://mannylerma.github.io/hulu-webpage-clone/' target="_blank"><button>Live</button></a>
                        <a href='https://github.com/MannyLerma/hulu-webpage-clone' target="_blank"><button>Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-containers'>
            <div className='left-container shift-up'>
                <div className='card'>
                    <h3>Weather App</h3>
                    <p>Design, HTML, CSS, JavaScript, API</p>
                    <img src={Weather} />
                    <div className='project-buttons'>
                        <a href='https://mannylerma.github.io/react-weather-app/' target="_blank"><button>Live</button></a>
                        <a href='https://github.com/MannyLerma/react-weather-app' target="_blank"><button>Github</button></a>
                    </div>
                </div>
                
            </div>
            <div className='right-container'>
                <div className='card'>
                <h3>This Portfolio</h3>
                <p>Design, HTML, CSS, React Development</p>
                <img src={Portfolio} />
                <div className='project-buttons'>
                        {/* <a><button>Live</button></a> */}
                        <a href='https://github.com/MannyLerma/main-portfolio' target="_blank"><button className='single-btn'>Github</button></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='card-containers'>
            <div className='left-container shift-up2'>
                <div className='card'>
                    <h3>Client Website</h3>
                    <p>Web Design, Graphic Design, WordPress</p>
                    <img src={CSS} />
                    <div className='project-buttons'>
                        <a href='https://completesignssolutions.com/' target="_blank"><button className='single-btn'>Live</button></a>
                    </div>
                </div>
                
            </div>
            <div className='right-container'>
                <div className='card'>
                <h3>My Graphic Design Website</h3>
                <p>Web Design, Graphic Design, WordPress, Drawing/Painting</p>
                <img src={GFX} />
                <div className='project-buttons'>
                        <a href='https://mannylerma.design/' target="_blank"><button className='single-btn'>Live</button></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
)

}

export default Projects;