import './App.css';
import { BigSection1 } from './components/BigSection1';
import { BigSection2 } from './components/BigSection2';
import { CenterSection } from './components/CenterSection';
import { NumberSection } from './components/NumberSection';

function App() {
  return (
    <>
      <h1>PROBADOR DE TECLADO</h1>
  
      <div id="body-keyboard">
        <div id= "big-section" className="keyboard-sections">
          <BigSection1 />
          <BigSection2 />
          <CenterSection />
          <NumberSection />
        </div>
      </div>
    </>
    );
  }

export default App;
