import "./top-bar.css";
import logo from "./logo.png";


export const TopNavBar = () => {

    return (
        <div className="top-nav-container">
            <div className="brand-container">
                <img src={logo} alt="logo" width="68px" height="68px" />
                <p className="title">Mannylerma.com</p>
            </div>
            <div className="links">
                <p>Work</p>
                <p>Resume</p>
                <p>About</p>
                <p>Contact</p>
            </div>
        </div>
    )
}

export default TopNavBar;