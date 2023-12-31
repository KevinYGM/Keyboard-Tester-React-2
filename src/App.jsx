import { useState, useEffect } from 'react';
import './App.css';
import './stylesButtons.css';
import { BigSection1 } from './components/BigSection1';
import { BigSection2 } from './components/BigSection2';
import { CenterSection } from './components/CenterSection';
import { NumberSection } from './components/NumberSection';
import { FunctionsSection } from './components/FunctionsSection';
import { keysConnections } from './helper/keysConnections';
import { BsLinkedin } from "react-icons/bs";
import { FaReact } from "react-icons/fa6";


function App() {

    keysConnections();
    
    const [keyPressed, setKeyPressed] = useState(null);
    const [capsLockOn, setCapsLockOn] = useState(false);

    useEffect(() => {
      
      function handleKeyDown(event) {

//function that verifies the keys pressed and prevents the execution of the default action of some.

        if (event.key === '/' ||
            event.code === 'Minus' ||
            event.code === 'Tab' ||
            event.code === 'F1' ||
            event.code === 'F2' ||
            event.code === 'F3' ||
            event.code === 'F4' ||
            event.code === 'F5' ||
            event.code === 'F6' ||
            event.code === 'F7' ||
            event.code === 'F8' ||
            event.code === 'F9' ||
            event.code === 'F10' ||
            event.code === 'F11' ||
            event.code === 'F12' 
            ) {
          event.preventDefault();
        }else if( event.code === "Space"){
          setKeyPressed(event.code);
        }else {
          setKeyPressed(event.key);
        }

//Function that checks if CAPSLOCK is active or inactive.

        if (event.getModifierState('CapsLock')) {
          setCapsLockOn(true);
        } else {
          setCapsLockOn(false);
        }
      }

      window.addEventListener('keydown', handleKeyDown);
    }, []);

    
    return (
    <>
      <div className="content">
        <h1>KEYBOARD TESTER | PROBADOR DE TECLADO</h1>
        <hr />
        
        <div className='title'>
          <p className='capsLockVerified'>
              <span>CAPS LOCK: </span>
              <span>{capsLockOn ? 'ACTIVE 💡' : 'DISABLED 🚫'}</span>
          </p>
        
          <p className='lastKey'>
            <span>LAST KEY PRESSED : </span>
            <span>{keyPressed ? keyPressed : "None"}</span>
          </p>
        </div>
        <div className='body-keyboard'>
          <div className="container-big-section">
            <FunctionsSection />
            <section id= "big-section" className='keyboard-sections'>
              <BigSection1 />
              <BigSection2 />
            </section>
          </div>
        
          <CenterSection />
          <NumberSection />
        </div>
        <h3>LAYOUT QWERTY SPANISH</h3>
      </div>

      
      <hr />
      <footer>
        <div className="logo">
          <span>KG</span>
          <h3>Kevin González Montenegro</h3>
        </div>

        <div className="react">
        <span><FaReact /></span>
        <span>&copy; Created with <strong>React</strong> in 2023  </span>
        </div>
        
        <a href="https://www.linkedin.com/in/kevinygm/" className='linkedin' target="_blank" rel="noreferrer">
          <BsLinkedin />
          <span>Programmer Linkedin</span>
        </a>
      </footer>
    </>
   );
  
  }

export default App;
