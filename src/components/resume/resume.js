import './resume.css';
import NewTab from './open-new-tab.png';

export const Resume = () => {

    return (
        <div id="resume" className='resume-container'>
            <div className='title'>
                <span  className="resume-dot"></span>
                <h2>Resume</h2>
            </div>
            <div className='resume-info-container'>
            <div className='resume-left-side'>
                <div className='work-experience-container'>
                    <h3>Work Experience</h3>
                    <div className='work-experience'>
                        <h4>Infinity Graphics</h4>
                        <p>Graphic Designer/Production Artist</p>
                        <p>August 2022 - Current</p>
                    </div>
                    <div className='work-experience'>
                        <h4>RX1 Management</h4>
                        <p>Graphic Designer/Content Manager</p>
                        <p>August 2020 - August 2022</p>
                    </div>
                    <div className='work-experience'>
                        <h4>Sigma Signs & Printing</h4>
                        <p>Graphic Designer/Production Artist</p>
                        <p>August 2019 - March 2020</p>
                    </div>
                </div>
                <div className='list-container'>
                    <h3>Skills</h3>
                    <div className='list'>
                        <div>
                            <h4>Design</h4>
                            <li>Visual Design</li>
                            <li>UX/UI Design</li>
                            <li>Branding</li>
                            <li>Prototyping</li>
                        </div>
                        <div>
                            <h4>Development</h4>
                            <li>Visual Development</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </div>
                    </div>
                </div>
                <div className='list-container'>
                    <h3>Tools</h3>
                        <div className='list'>
                            <div>
                            <div>
                                <li>Wordpress</li>
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Adobe XD</li>
                            </div>
                        </div>
                        <div>
                            <li>Visual Studio Code</li>
                            <li>Figma</li>
                            <li>GitHub</li>
                            <li>Lightroom</li>
                        </div>
                        </div>
                    </div>
                
            </div>
            <div className='resume-right-side'>
                <div className='education-container'>
                    <h3>Education</h3>
                    <div className='education'>
                        <h4>University of North Texas</h4>
                        <p>B.A. in Interdisciplinary Design & Art Studies</p>
                        <p>Minors in Marketing and Art History</p>
                        <p>2015 - 2019</p>
                    </div>
                    <div className='education'>
                        <h4>North Mesquite H.S.</h4>
                        <p>General Studies</p>
                        <p>2011 - 2015</p>
                    </div>
                </div>
                <div className='courses-container'>
                    <h3>Online Courses</h3>
                    <div className='online-course'>
                        <div className='course-link'>
                            <h4><a href='https://www.freecodecamp.org/' target="_blank">freeCodeCamp</a></h4>
                            <img src={NewTab}></img>
                        </div>
                        <p>Responsive Web Design</p>
                        <p>JavaScript Algorithms</p>
                    </div>
                    <div className='online-course'>
                        <div className='course-link'>
                            <h4><a href='https://www.theodinproject.com/' target="_blank">The Odin Project</a></h4>
                            <img src={NewTab}></img>
                        </div>
                        <p>Foundations</p>
                    </div>
                    <div className='online-course'>
                        <div className='course-link'>
                            <h4><a href='https://www.codecademy.com/' target="_blank">Codecademy</a></h4>
                            <img src={NewTab}></img>
                        </div>
                        <p>Various Courses</p>
                    </div>
                    <div className='online-course'>
                        <div className='course-link'>
                            <h4><a href='https://www.udemy.com/' target="_blank">Udemy</a></h4>
                            <img src={NewTab}></img>
                        </div>
                            <p>The Complete 2022 Web Development Bootcamp</p>
                            <p>The Complete WordPress Website Business Course</p>
                    </div>
                    <div className='online-course'>
                        <div className='course-link'>
                            <h4><a href='https://www.coursera.org/' target="_blank">Coursera</a></h4>
                            <img src={NewTab}></img>
                        </div>
                        <p>Intro to UX Design from Georgia Tech</p>
                    </div>
                    <div className='online-course'>
                        <div className='course-link'>
                            <h4><a href='https://learndigital.withgoogle.com/digitalgarage/' target="_blank">Google Digital Garage</a></h4>
                            <img src={NewTab}></img>
                        </div>
                        <p>Fundamentals of Digital Marketing</p>
                    </div>
                </div>
        </div>
    </div>
</div>
    )
}

export default Resume;