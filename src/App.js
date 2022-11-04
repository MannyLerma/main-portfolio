import './App.css';
import TopNavBar from "./components/topNavBar/top-bar";
import Intro from './components/introduction/intro';
import Projects from './components/selected-works/projects';
import Resume from './components/resume/resume'
import AboutMe from './components/about-me/about'
import Contact from './components/contact/contact';
import MobileMenu from './components/mobile menu/mobile-menu';

function App() {
  return (
    <div className='container'>
        <TopNavBar />
        <Intro />
        <Projects />
        <Resume />
        <AboutMe />
        <Contact />
        <MobileMenu />
    </div>
  );
}

export default App;
