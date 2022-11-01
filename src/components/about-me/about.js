import './about.css';

export const AboutMe = () => {

    return (
        <div id="about" className='about-me-container'>
            <div  className='title'>
                <span className="about-dot"></span>
                <h2>About Me</h2>
            </div>
            <div className='about-text-container'>
            <div className='text-container'>
                <h4>Who am I?</h4>
                <p>
                My name is Emmanuel Lerma and I am a graphic designer
                and an aspiring front-end web developer in Dallas, TX.
                I have a B.A. in Interdisciplinary Design & Art Studies,
                with minors in Marketing and Art History.
                </p>
            </div>
            <div className='text-container'>
                <h4>What do I do?</h4>
                <p>
                I aim to combine my newfound knowledge of web
                development with my experience of design to transform
                tricky problems into engaging solutions. With my ongoing
                committment to learning, I am understanding the 
                constraints of the web and be able to design and build 
                around them effectively.
                </p>
            </div>
            <div className='text-container'>
                <h4>What am I passionate about?</h4>
                <p>
                As someone who has focused on creating design solutions
                the past 10+ years, I want to continue creating beautiful
                experiences at a greater scale.
                </p>
                <p>
                Because of this, I am always on the lookout for learning 
                something new to add to my arsenal of tools and
                techniques. I am also extremely passionate about 
                bridging the gap between designer and developer in order
                to create the best product.
                </p>
            </div>
        </div>
        </div>
    )
}

export default AboutMe;