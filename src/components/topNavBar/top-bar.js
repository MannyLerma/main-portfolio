import "./top-bar.css";
import logo from "./logo.png";


export const TopNavBar = () => {

    return (
        <div className="top-nav-container">
            <a href="mannylerma.com">
            <div className="brand-container">
                <img src={logo} alt="logo" width="68px" height="68px" />
                <p className="title">Mannylerma.com</p>
            </div>
            </a>
            <div className="links">
                <p><a href="#works">Work</a></p>
                <p><a href="#resume">Resume</a></p>
                <p><a href="#about">About</a></p>
                <p><a href="#contact">Contact</a></p>
            </div>
        </div>
    )
}

export default TopNavBar;