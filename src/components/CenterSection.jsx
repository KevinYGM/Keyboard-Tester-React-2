import React from 'react'
import { buttonPressed } from '../helper/buttonPressed'

export const CenterSection = () => {
  return (
  
    <div id="center-section" className='keyboard-sections'>
{/*------------------ Section Center-Up---------------------- */}
      <section className='center-up'>
        <button id="print" onClick={e => buttonPressed(e)}>PRINT</button>
        <button id="scroll" onClick={e => buttonPressed(e)}>SCROLL</button>
        <button id="pause" onClick={e => buttonPressed(e)}>PAUSE</button>
        <button id="insert" onClick={e => buttonPressed(e)}>INSERT</button>
        <button id="home" onClick={e => buttonPressed(e)}>HOME</button>
        <button id="up" onClick={e => buttonPressed(e)}>UP</button>
        <button id="del" onClick={e => buttonPressed(e)}>DEL</button>
        <button id="end" onClick={e => buttonPressed(e)}>END</button>
        <button id="down" onClick={e => buttonPressed(e)}>DOWN</button>
      </section>

{/*------------------ Section Center-Down---------------------- */}
      <section className='center-down'>
        <button id="up-arrow" onClick={e => buttonPressed(e)}>⬆</button>
        <button id="left-arrow" onClick={e => buttonPressed(e)}>⬅</button>
        <button id="down-arrow" onClick={e => buttonPressed(e)}>⬇</button>
        <button id="right-arrow" onClick={e => buttonPressed(e)}>➡</button>
      </section>

    </div>
  )
}
