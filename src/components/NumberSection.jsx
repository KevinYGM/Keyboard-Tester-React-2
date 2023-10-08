import React from 'react'

export const NumberSection = () => {
  return (
    <>
      <div id="pad-numerico">
        <section id="espacio-vacio"></section>
        <section>
          <button id="lock">LOCK</button>
          <button id="simb-slash">/</button>
          <button id="simb-asterisco">*</button>
        </section>
        <section>
          <button id="numpad-7">7</button>
          <button id="numpad-8">8</button>
          <button id="numpad-9">9</button>
        </section>

        <section>
          <button id="numpad-4">4</button>
          <button id="numpad-5">5</button>
          <button id="numpad-6">6</button>
        </section>
        <section>
          <button id="numpad-1">1</button>
          <button id="numpad-2">2</button>
          <button id="numpad-3">3</button>
        </section>
        <section>
          <button id="numpad-0">0</button>
          <button id="pad-punto">.</button>
        </section>
          
        
        <div id="pad-numerico-especial">
            <section id="espacio-vacio"></section>
            <button id="pad-menos">-</button>
            <button id="pad-mas">+</button>
            <button id="pad-enter">ENTER</button>
        </div>
      </div>
    </>
  )
}
