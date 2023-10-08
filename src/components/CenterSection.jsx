import React from 'react'

export const CenterSection = () => {
  return (
    <>
      <div className="keyboard-sections">
          <section>
            <button id="print">PRINT</button>
            <button id="scroll">SCROLL</button>
            <button id="pause">PAUSE</button>
          </section>
            
            <section>
              <button id="insert">INSERT</button>
              <button id="home">HOME</button>
              <button id="up">UP</button>
            </section>

            <section>
              <button id="del">DEL</button>
              <button id="end">END</button>
              <button id="down">DOWN</button>
            </section>

            <section id="espacio-vacio"></section>
            <section id="especial">
              <button id="direccional-arriba">⬆</button>
            </section>

            <section>
              <button id="direccional-izquierda">⬅</button>
              <button id="direccional-abajo">⬇</button>
              <button id="direccional-derecha">➡</button>
            </section>
        </div>
      </>
  )
}
