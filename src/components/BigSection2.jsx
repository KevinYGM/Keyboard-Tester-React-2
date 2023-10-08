import React from 'react'

export const BigSection2 = () => {
  return (
    <>
      <section>
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
        <button id="simb-corchete-apertura"></button>
        <button id="enter">ENTER</button>
      </section>

      <section>
        <button id="shift" classNameName="shift-izquierdo">SHIFT</button>
        <button id="simbolo-mayor"></button>
        <button id="letter-Z">Z</button>
        <button id="letter-X">X</button>
        <button id="letter-C">C</button>
        <button id="letter-V">V</button>
        <button id="letter-B">B</button>
        <button id="letter-N">N</button>
        <button id="letter-M">M</button>
        <button id="simbolo-coma">,</button>
        <button id="simbolo-punto">.</button>
        <button id="simbolo-piso-bajo">_</button>
        <button id="shift" className="shift-derecho">SHIFT</button>
      </section>

      <section>
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
