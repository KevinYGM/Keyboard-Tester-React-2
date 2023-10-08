import React from 'react'

export const BigSection2 = () => {
  // variables to be able to place symbols that JSX does not accept.
  
  const openBracket = "{";
  const minor = "<";
  const elderly = ">";

  return (
    <>
{/*------------------------- Line: 4--------------------------- */}
      <section className='4th-line'>
        <button id="caps-lock">CAPS LOCK</button>
        <button id="letter-A">A</button>
        <button id="letter-S">S</button>
        <button id="letter-D">D</button>
        <button id="letter-F">F</button>
        <button id="letter-G">G</button>
        <button id="letter-H">H</button>
        <button id="letter-J">J</button>
        <button id="letter-K">K</button>
        <button id="letter-L">L</button>
        <button id="letter-Ñ">Ñ</button>

        <button id="symb-´">
          <span>¨</span> <span>´</span> <span>{openBracket}</span>
        </button>

        <button id="enter">ENTER</button>
      </section>

{/*------------------------ Line: 5-------------------------- */}  
      <section className='5th-line'>
        <button id="shift" className="shift-izquierdo">SHIFT</button>

        <button id="symb-<>">
          <span>{minor}</span> <span>{elderly}</span>
        </button>

        <button id="letter-Z">Z</button>
        <button id="letter-X">X</button>
        <button id="letter-C">C</button>
        <button id="letter-V">V</button>
        <button id="letter-B">B</button>
        <button id="letter-N">N</button>
        <button id="letter-M">M</button>

        <button id="symb-,">
          <span>;</span> <span>,</span>
        </button>

        <button id="symb-.">
          <span>:</span> <span>.</span>
        </button>

        <button id="symb-.">
          <span>_</span> <span>-</span>
        </button>

        <button id="shift" className="shift-derecho">SHIFT</button>
      </section>

{/*------------------------- Line: 6--------------------------- */}
      <section className='6th-line'>
        <button id="ctrl" className="ctrl-izquierdo">CTRL</button>
        <button id="win">WIN</button>
        <button id="alt" className="alt-izquierdo">ALT</button>
        <button id="barra-espaciadora">______________</button>
        <button id="alt" className="alt-derecho">ALT</button>
        <button id="fn">FN</button>
        <button id="ctrl" className="ctrl-derecho">CTRL</button>
      </section>
    </>
  )
}
