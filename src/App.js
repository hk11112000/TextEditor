// Importing the Components
import './App.css';
import Navbar from './components/Navbar'
import Popup from './components/Popup';
import SocialMedia from './components/SocialMedia';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';




function App() {
  const [skills, setSkills] = useState('');

  // Div Scrolling
  const scrollbar = () => {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: 'smooth'

    });
  }

  // Popup Display Function
  const skillsDisplay = () => {
    const displaySkills = "Hello! This Web Application is made using HTML5 , CSS, React JS"
    setSkills(displaySkills)
    setTimeout(() => {
      setSkills('')
    }, 3000);
  }
  return (
    <>
      <Navbar title ="MyApp" menu1="Home" menu2="About" menu3='Skills' skillDisplay = {skillsDisplay} scrollbar = {scrollbar}/>
      <Popup paragraph= {skills} />
      <SocialMedia/>
      <TextForm heading="Text Editor"/>
      <About/>
    </>
  );
}

export default App;
