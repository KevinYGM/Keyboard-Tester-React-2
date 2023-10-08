import React from 'react'

export const CenterSection = () => {
  return (
  
    <div className="keyboard-sections">
{/*------------------ Section Center-Up---------------------- */}
      <section className='center-up'>
        <button id="print">PRINT</button>
        <button id="scroll">SCROLL</button>
        <button id="pause">PAUSE</button>
        <button id="insert">INSERT</button>
        <button id="home">HOME</button>
        <button id="up">UP</button>
        <button id="del">DEL</button>
        <button id="end">END</button>
        <button id="down">DOWN</button>
      </section>

{/*------------------ Section Center-Down---------------------- */}
      <section className='center-down'>
          <div>
            <button id="up-arrow">⬆</button>
          </div>
          <div>
            <button id="left-arrow">⬅</button>
            <button id="down-arrow">⬇</button>
            <button id="right-arrow">➡</button>
          </div>
      </section>

    </div>
  )
}
