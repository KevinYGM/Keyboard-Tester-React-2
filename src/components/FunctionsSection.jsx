import React from 'react'
import { buttonPressed } from '../helper/buttonPressed'

export const FunctionsSection = () => {
  return (
    <section className='functions'>
      {/*------------------- Line 1: functions----------------------- */}
      <button id="esc" onClick={e => buttonPressed(e)}>ESC</button>
      <button id="function-1" onClick={e => buttonPressed(e)}>F1</button>
      <button id="function-2" onClick={e => buttonPressed(e)}>F2</button>
      <button id="function-3" onClick={e => buttonPressed(e)}>F3</button>
      <button id="function-4" onClick={e => buttonPressed(e)}>F4</button>
      <button id="function-5" onClick={e => buttonPressed(e)}>F5</button>
      <button id="function-6" onClick={e => buttonPressed(e)}>F6</button>
      <button id="function-7" onClick={e => buttonPressed(e)}>F7</button>
      <button id="function-8" onClick={e => buttonPressed(e)}>F8</button>
      <button id="function-9" onClick={e => buttonPressed(e)}>F9</button>
      <button id="function-10" onClick={e => buttonPressed(e)}>F10</button>
      <button id="function-11" onClick={e => buttonPressed(e)}>F11</button>
      <button id="function-12" onClick={e => buttonPressed(e)}>F12</button>
    </section>
  )
}
