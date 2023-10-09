import './App.css';
import './stylesButtons.css';
import { BigSection1 } from './components/BigSection1';
import { BigSection2 } from './components/BigSection2';
import { CenterSection } from './components/CenterSection';
import { NumberSection } from './components/NumberSection';
import { FunctionsSection } from './components/FunctionsSection';

function App() {
  return (
    <>
      <h1>PROBADOR DE TECLADO</h1>
      <hr />
      <h3>LAYOUT QWERTY ESPAÑOL</h3>
  
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
    </>
    );
  }

export default App;
