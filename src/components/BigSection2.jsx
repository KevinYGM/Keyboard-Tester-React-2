import React from 'react'
import { buttonPressed } from '../helper/buttonPressed'

export const BigSection2 = () => {
  // variables to be able to place symbols that JSX does not accept.
  
  const openBracket = "{";
  const minor = "<";
  const elderly = ">";

  return (
    <>
{/*------------------------- Line: 3--------------------------- */}
      <section className='line-three'>
        <button id="caps-lock" onClick={e => buttonPressed(e)}>CAPS LOCK</button>
        <button id="letter-A" onClick={e => buttonPressed(e)}>A</button>
        <button id="letter-S" onClick={e => buttonPressed(e)}>S</button>
        <button id="letter-D" onClick={e => buttonPressed(e)}>D</button>
        <button id="letter-F" onClick={e => buttonPressed(e)}>F</button>
        <button id="letter-G" onClick={e => buttonPressed(e)}>G</button>
        <button id="letter-H" onClick={e => buttonPressed(e)}>H</button>
        <button id="letter-J" onClick={e => buttonPressed(e)}>J</button>
        <button id="letter-K" onClick={e => buttonPressed(e)}>K</button>
        <button id="letter-L" onClick={e => buttonPressed(e)}>L</button>
        <button id="letter-Ñ" onClick={e => buttonPressed(e)}>Ñ</button>

        <button id="symb-´" className='symbol' onClick={e => buttonPressed(e)}>
          <span>¨</span> <span>´</span> <span>{openBracket}</span>
        </button>

        <button id="enter" onClick={e => buttonPressed(e)}>ENTER</button>
      </section>

{/*------------------------ Line: 4-------------------------- */}  
      <section className='line-four'>
        <button id="shift" className="left-shift" onClick={e => buttonPressed(e)}>SHIFT</button>

        <button id="symb-arrows" className='symbol' onClick={e => buttonPressed(e)}>
          <span>{minor}</span> <span>{elderly}</span>
        </button>

        <button id="letter-Z" onClick={e => buttonPressed(e)}>Z</button>
        <button id="letter-X" onClick={e => buttonPressed(e)}>X</button>
        <button id="letter-C" onClick={e => buttonPressed(e)}>C</button>
        <button id="letter-V" onClick={e => buttonPressed(e)}>V</button>
        <button id="letter-B" onClick={e => buttonPressed(e)}>B</button>
        <button id="letter-N" onClick={e => buttonPressed(e)}>N</button>
        <button id="letter-M" onClick={e => buttonPressed(e)}>M</button>

        <button id="symb-," className='symbol' onClick={e => buttonPressed(e)}>
          <span>;</span> <span>,</span>
        </button>

        <button id="symb-." className='symbol' onClick={e => buttonPressed(e)}>
          <span>:</span> <span>.</span>
        </button>

        <button id="symb-- " className='symbol' onClick={e => buttonPressed(e)}>
          <span>_</span> <span>-</span>
        </button>

        <button id="shift" className="right-shift" onClick={e => buttonPressed(e)}>SHIFT</button>
      </section>

{/*------------------------- Line: 5--------------------------- */}
      <section className='line-five'>
        <button id="ctrl" className="left-ctrl" onClick={e => buttonPressed(e)}>CTRL</button>
        <button id="win" onClick={e => buttonPressed(e)}>WIN</button>
        <button id="alt" className="left-alt" onClick={e => buttonPressed(e)}>ALT</button>
        <button id="space-bar" onClick={e => buttonPressed(e)}></button>
        <button id="alt" className="right-alt" onClick={e => buttonPressed(e)}>ALT</button>
        <button id="fn" onClick={e => buttonPressed(e)}>FN</button>
        <button id="ctrl" className="right-ctrl" onClick={e => buttonPressed(e)}>CTRL</button>
      </section>
    </>
  )
}
