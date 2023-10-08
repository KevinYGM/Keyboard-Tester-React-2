import React from 'react'

export const BigSection1 = () => {
   // variables to be able to place symbols that JSX does not accept.
  const closedBracket = "}";

  return (
    <>
{/*------------------- Line 1: functions----------------------- */}
      <section className='functions'>
        <button id="esc">ESC</button>
        <button id="function-1">F1</button>
        <button id="function-2">F2</button>
        <button id="function-3">F3</button>
        <button id="function-4">F4</button>
        <button id="function-5">F5</button>
        <button id="function-6">F6</button>
        <button id="function-7">F7</button>
        <button id="function-8">F8</button>
        <button id="function-9">F9</button>
        <button id="function-10">F10</button>
        <button id="function-11">F11</button>
        <button id="function-12">F12</button>
      </section>

{/*------------------------- Line: 2--------------------------- */}
      <section className='2nd-line'>
        <button id="simb-guion-vertical">
          <span>ª</span> <span>º</span> <span>\</span>
        </button>

        <button id="number-1">
          <span>!</span> <span>1</span> <span>|</span>
        </button>

        <button id="number-2">
          <span>"</span> <span>2</span> <span>@</span>
        </button>

        <button id="number-3">
          <span>·</span> <span>3</span> <span>#</span>
        </button>

        <button id="number-4">
          <span>$</span> <span>4</span> <span>~</span>
        </button>

        <button id="number-5">
          <span>%</span> <span>5</span> <span>€</span>
        </button>

        <button id="number-6">
          <span>&</span> <span>6</span> <span>¬</span>
        </button>

        <button id="number-7">
          <span>/</span> <span>7</span> 
        </button>

        <button id="number-8">
          <span>(</span> <span>8</span>
        </button>

        <button id="number-9">
          <span>)</span> <span>9</span>
        </button>

        <button id="number-0">
          <span>=</span> <span>0</span>
        </button>

        <button id="symbol-'">
          <span>?</span> <span>'</span>
        </button>

        <button id="symbol-¡">
          <span>¿</span> <span>¡</span>
        </button>
        
        <button id="backspace">←</button>
      </section>

{/*------------------------- Line: 3--------------------------- */}
      <section className='3rd-line'>
        <button id="tab">TAB</button>
        <button id="letter-Q">Q</button>
        <button id="letter-W">W</button>
        <button id="letter-E">E</button>
        <button id="letter-R">R</button>
        <button id="letter-T">T</button>
        <button id="letter-Y">Y</button>
        <button id="letter-U">U</button>
        <button id="letter-I">I</button>
        <button id="letter-O">O</button>
        <button id="letter-P">P</button>

        <button id="symbol-`">
          <span>^</span> <span>`</span> <span>[</span>
        </button>

        <button id="symbol-+">
          <span>*</span> <span>+</span> <span>]</span>
        </button>

        <button id="symbol-ç">
          <span>Ç</span> <span>ç</span> <span>{closedBracket}</span>
        </button>
      </section>
    </>
  )
}
