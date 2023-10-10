import React from 'react'
import { buttonPressed } from '../helper/buttonPressed'

export const NumberSection = () => {
 
  return (
    <div id="number-pad" className='keyboard-section'>
        <div id="brand">Kygm App</div>
        <button id="lock" onClick={e => buttonPressed(e)}>LOCK</button>
        <button id="symbol-slash" onClick={e => buttonPressed(e)}>/</button>
        <button id="symb-asterisk" onClick={e => buttonPressed(e)}>*</button>
        <button id="pad-substract" onClick={e => buttonPressed(e)}>-</button>

        <button id="numpad-7" className='symbol' onClick={e => buttonPressed(e)}>
          <span>7</span><span>HOME</span>
        </button>
        <button id="numpad-8" className='symbol' onClick={e => buttonPressed(e)}>
          <span>8</span><span>⬆</span>
        </button>
        <button id="numpad-9" className='symbol' onClick={e => buttonPressed(e)}>
          <span>9</span><span>UP</span>
        </button>

        <button id="pad-plus" onClick={e => buttonPressed(e)}>+</button>

        <button id="numpad-4" className='symbol' onClick={e => buttonPressed(e)}>
          <span>4</span><span>⬅</span>
        </button>

        <button id="numpad-5" className='symbol' onClick={e => buttonPressed(e)}>
          <span>5</span>
        </button>

        <button id="numpad-6" className='symbol' onClick={e => buttonPressed(e)}>
          <span>6</span><span>➡</span>
        </button>

        <button id="numpad-1" className='symbol' onClick={e => buttonPressed(e)}>
          <span>1</span><span>FIN</span>
        </button>

        <button id="numpad-2" className='symbol' onClick={e => buttonPressed(e)}>
          <span>2</span><span>⬇</span>
        </button>

        <button id="numpad-3" className='symbol' onClick={e => buttonPressed(e)}>
          <span>3</span><span>DOWN</span>
        </button>
        
        <button id="pad-enter" onClick={e => buttonPressed(e)}>ENTER</button>

        <button id="numpad-0" className='symbol' onClick={e => buttonPressed(e)}>
          <span>0</span><span>INSERT</span>
        </button>

        <button id="pad-point" className='symbol' onClick={e => buttonPressed(e)}>
          <span>.</span><span>DEL</span>
        </button>
      </div>
  )
}
