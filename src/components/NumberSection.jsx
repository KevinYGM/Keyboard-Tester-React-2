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
        <button id="numpad-7" onClick={e => buttonPressed(e)}>7</button>
        <button id="numpad-8" onClick={e => buttonPressed(e)}>8</button>
        <button id="numpad-9" onClick={e => buttonPressed(e)}>9</button>
        <button id="pad-plus" onClick={e => buttonPressed(e)}>+</button>
        <button id="numpad-4" onClick={e => buttonPressed(e)}>4</button>
        <button id="numpad-5" onClick={e => buttonPressed(e)}>5</button>
        <button id="numpad-6" onClick={e => buttonPressed(e)}>6</button>
        <button id="numpad-1" onClick={e => buttonPressed(e)}>1</button>
        <button id="numpad-2" onClick={e => buttonPressed(e)}>2</button>
        <button id="numpad-3" onClick={e => buttonPressed(e)}>3</button>
        <button id="pad-enter" onClick={e => buttonPressed(e)}>ENTER</button>
        <button id="numpad-0" onClick={e => buttonPressed(e)}>0</button>
        <button id="pad-point" onClick={e => buttonPressed(e)}>.</button>
    </div>
  )
}
