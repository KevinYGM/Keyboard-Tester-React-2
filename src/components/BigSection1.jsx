import React from 'react'
import { buttonPressed } from '../helper/buttonPressed'


export const BigSection1 = () => {
   // variables to be able to place symbols that JSX does not accept.
  const closedBracket = "}";

  return (
    <>
{/*------------------------- Line: 1--------------------------- */}

      <section className='line-one'>
        <button id="symbol-º" className='symbol' onClick={e => buttonPressed(e)}>
          <span>ª</span> <span>º</span> <span>\</span>
        </button>

        <button id="number-1" className='symbol' onClick={e => buttonPressed(e)}>
          <span>!</span> <span>1</span> <span>|</span>
        </button>

        <button id="number-2" className='symbol' onClick={e => buttonPressed(e)}>
          <span>"</span> <span>2</span> <span>@</span>
        </button>

        <button id="number-3" className='symbol' onClick={e => buttonPressed(e)}>
          <span>·</span> <span>3</span> <span>#</span>
        </button>

        <button id="number-4" className='symbol' onClick={e => buttonPressed(e)}>
          <span>$</span> <span>4</span> <span>~</span>
        </button>

        <button id="number-5" className='symbol' onClick={e => buttonPressed(e)}>
          <span>%</span> <span>5</span> <span>€</span>
        </button>

        <button id="number-6" className='symbol' onClick={e => buttonPressed(e)}>
          <span>&</span> <span>6</span> <span>¬</span>
        </button>

        <button id="number-7" className='symbol' onClick={e => buttonPressed(e)}>
          <span>/</span> <span>7</span> 
        </button>

        <button id="number-8" className='symbol' onClick={e => buttonPressed(e)}>
          <span>(</span> <span>8</span>
        </button>

        <button id="number-9" className='symbol' onClick={e => buttonPressed(e)}>
          <span>)</span> <span>9</span>
        </button>

        <button id="number-0" className='symbol' onClick={e => buttonPressed(e)}>
          <span>=</span> <span>0</span>
        </button>

        <button id="symbol-'" className='symbol' onClick={e => buttonPressed(e)}>
          <span>?</span> <span>'</span>
        </button>

        <button id="symbol-¡" className='symbol' onClick={e => buttonPressed(e)}>
          <span>¿</span> <span>¡</span>
        </button>
        
        <button id="backspace" onClick={e => buttonPressed(e)}>←</button>
      </section>

{/*------------------------- Line: 2--------------------------- */}
      <section className='line-two'>
        <button id="tab" onClick={e => buttonPressed(e)} >TAB</button>
        <button id="letter-Q" onClick={e => buttonPressed(e)}>Q</button>
        <button id="letter-W" onClick={e => buttonPressed(e)}>W</button>
        <button id="letter-E" onClick={e => buttonPressed(e)}>E</button>
        <button id="letter-R" onClick={e => buttonPressed(e)}>R</button>
        <button id="letter-T" onClick={e => buttonPressed(e)}>T</button>
        <button id="letter-Y" onClick={e => buttonPressed(e)}>Y</button>
        <button id="letter-U" onClick={e => buttonPressed(e)}>U</button>
        <button id="letter-I" onClick={e => buttonPressed(e)}>I</button>
        <button id="letter-O" onClick={e => buttonPressed(e)}>O</button>
        <button id="letter-P" onClick={e => buttonPressed(e)}>P</button>

        <button id="symbol-`" className='symbol' onClick={e => buttonPressed(e)}>
          <span>^</span> <span>`</span> <span>[</span>
        </button>

        <button id="symbol-+" className='symbol' onClick={e => buttonPressed(e)}>
          <span>*</span> <span>+</span> <span>]</span>
        </button>

        <button id="symbol-ç" className='symbol' onClick={e => buttonPressed(e)}>
          <span>Ç</span> <span>ç</span> <span>{closedBracket}</span>
        </button>
      </section>
    </>
  )
}
