import './contact.css';
import linkedin from './linkedin.png';
import github from './github.png';
import resume from './resume.png';
import email from './email.png';

export const Contact = () => {

    return (
        <div className='contact-container'>
            <div>
                <div className='title'>
                    <span className="dot"></span>
                    <h2>Contact</h2>
                </div>
                <h4>Want to get a hold of me?</h4>
                <br></br>
                <h4>Just want to say hi? Drop a message here!</h4>
            </div>
            <br></br>
            <div className='contact-links-container'>
                <div className='link-row'>
                    <a href="mailto:someone@something.com?subject=your title&body=TThe message">
                        <img src={email}/>
                        <h3>Emmanuellerma@outlook.com</h3>
                    </a>
                </div>
                <div className='link-row'>
                    <a href='https://github.com/MannyLerma'>
                        <img src={github}/>
                        <h3>Github Link</h3>
                    </a>
                </div>
                <div className='link-row'>
                    <a href='https://www.linkedin.com/in/emmanuellerma/'>
                        <img src={linkedin}/>
                        <h3>Linkedin Link</h3>
                    </a>
                </div>
                <div className='link-row'>
                    <a href='https://drive.google.com/file/d/1vNlfEz-Eh9R9MStfTwRGFQmdA1g8zUhB/view?usp=sharing' target="_blank">
                        <img src={resume}/>
                        <h3>View My Resume</h3>
                    </a>
                </div>

            </div>
            {/* <div className='input-container'>
                <input placeholder='Your Name'></input>
                <input placeholder='Your Email'></input>
                <input type='text' rows={5} placeholder='Your Message'></input>
            </div> */}
        </div>
    )
}

export default Contact;