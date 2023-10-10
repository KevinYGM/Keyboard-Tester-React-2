
export const keysConnections = () => {
  
  const effectButtons = (buttonTurn) =>{
    buttonTurn.classList.add('blink');
    setTimeout(function() {
      buttonTurn.classList.remove('blink');
      buttonTurn.click();
    }, 100);
  }


  document.addEventListener('keydown', function(event) {

/*-----------------------Buttons Component: BigSection1 --------------------*/

    if (event.code === "Backquote") {
        let buttonTurn = document.getElementById("symbol-º");
        effectButtons(buttonTurn);
    }

    if (event.code === "Digit1") {
      let buttonTurn = document.getElementById("number-1");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit2") {
      let buttonTurn = document.getElementById("number-2");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit3") {
      let buttonTurn = document.getElementById("number-3");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit4") {
      let buttonTurn = document.getElementById("number-4");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit5") {
      let buttonTurn = document.getElementById("number-5");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit6") {
      let buttonTurn = document.getElementById("number-6");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit7") {
      let buttonTurn = document.getElementById("number-7");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit8") {
      let buttonTurn = document.getElementById("number-8");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit9") {
      let buttonTurn = document.getElementById("number-9");
      effectButtons(buttonTurn);
    }

    if (event.code === "Digit0") {
      let buttonTurn = document.getElementById("number-0");
      effectButtons(buttonTurn);
    }
    
    if (event.code === "Minus") {
      let buttonTurn = document.getElementById("symbol-'");
      effectButtons(buttonTurn);
    }

    if (event.code === "Equal") {
      let buttonTurn = document.getElementById("symbol-¡");
      effectButtons(buttonTurn);
    }

    if (event.code === "Backspace") {
      let buttonTurn = document.getElementById("backspace");
      effectButtons(buttonTurn);
    }

    if (event.code === "Tab") {
      let buttonTurn = document.getElementById("tab");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyQ") {
      let buttonTurn = document.getElementById("letter-Q");
      effectButtons(buttonTurn);
    }
    if (event.code === "KeyW") {
      let buttonTurn = document.getElementById("letter-W");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyE") {
      let buttonTurn = document.getElementById("letter-E");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyR") {
      let buttonTurn = document.getElementById("letter-R");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyT") {
      let buttonTurn = document.getElementById("letter-T");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyY") {
      let buttonTurn = document.getElementById("letter-Y");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyU") {
      let buttonTurn = document.getElementById("letter-U");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyI") {
      let buttonTurn = document.getElementById("letter-I");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyO") {
      let buttonTurn = document.getElementById("letter-O");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyP") {
      let buttonTurn = document.getElementById("letter-P");
      effectButtons(buttonTurn);
    }

    if (event.code === "BracketLeft") {
      let buttonTurn = document.getElementById("symbol-`");
      effectButtons(buttonTurn);
    }

    if (event.code === "BracketRight") {
      let buttonTurn = document.getElementById("symbol-+");
      effectButtons(buttonTurn);
    }

    if (event.code === "Backslash") {
      let buttonTurn = document.getElementById("symbol-ç");
      effectButtons(buttonTurn);
    }

/*-----------------------Buttons Component: BigSection2 --------------------*/
    if (event.code === "CapsLock") {
      let buttonTurn = document.getElementById("caps-lock");
      effectButtons(buttonTurn);
    }
    
    if (event.code === "KeyA") {
      let buttonTurn = document.getElementById("letter-A");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyS") {
      let buttonTurn = document.getElementById("letter-S");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyD") {
      let buttonTurn = document.getElementById("letter-D");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyF") {
      let buttonTurn = document.getElementById("letter-F");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyG") {
      let buttonTurn = document.getElementById("letter-G");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyH") {
      let buttonTurn = document.getElementById("letter-H");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyJ") {
      let buttonTurn = document.getElementById("letter-J");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyK") {
      let buttonTurn = document.getElementById("letter-K");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyL") {
      let buttonTurn = document.getElementById("letter-L");
      effectButtons(buttonTurn);
    }

    if (event.code === "Semicolon") {
      let buttonTurn = document.getElementById("letter-Ñ");
      effectButtons(buttonTurn);
    }

    if (event.code === "Quote") {
      let buttonTurn = document.getElementById("symb-´");
      effectButtons(buttonTurn);
    }

    if (event.code === "Enter") {
      let buttonTurn = document.getElementById("enter");
      effectButtons(buttonTurn);
    }

    if (event.code === "ShiftLeft") {
      let buttonTurn = document.getElementById("left-shift");
      effectButtons(buttonTurn);
    }

    if (event.code === "IntlBackslash") {
      let buttonTurn = document.getElementById("symb-arrows");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyZ") {
      let buttonTurn = document.getElementById("letter-Z");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyX") {
      let buttonTurn = document.getElementById("letter-X");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyC") {
      let buttonTurn = document.getElementById("letter-C");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyV") {
      let buttonTurn = document.getElementById("letter-V");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyB") {
      let buttonTurn = document.getElementById("letter-B");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyN") {
      let buttonTurn = document.getElementById("letter-N");
      effectButtons(buttonTurn);
    }

    if (event.code === "KeyM") {
      let buttonTurn = document.getElementById("letter-M");
      effectButtons(buttonTurn);
    }

    if (event.code === "Comma") {
      let buttonTurn = document.getElementById("symb-,");
      effectButtons(buttonTurn);
    }

    if (event.code === "Period") {
      let buttonTurn = document.getElementById("symb-.");
      effectButtons(buttonTurn);
    }

    if (event.code === "Slash") {
      let buttonTurn = document.getElementById("symb--");
      effectButtons(buttonTurn);
    }

    if (event.code === "ShiftRight") {
      let buttonTurn = document.getElementById("right-shift");
      effectButtons(buttonTurn);
    }

    if (event.code === "ControlLeft") {
      let buttonTurn = document.getElementById("left-ctrl");
      effectButtons(buttonTurn);
    }

    if (event.code === "MetaLeft") {
      let buttonTurn = document.getElementById("win");
      effectButtons(buttonTurn);
    }

    if (event.code === "AltLeft") {
      let buttonTurn = document.getElementById("left-alt");
      effectButtons(buttonTurn);
    }

    if (event.code === "Space") {
      let buttonTurn = document.getElementById("space-bar");
      effectButtons(buttonTurn);
    }

    if (event.code === "AltRight") {
      let buttonTurn = document.getElementById("right-alt");
      effectButtons(buttonTurn);
    }

    if (event.code === "Space") {
      let buttonTurn = document.getElementById("space-bar");
      effectButtons(buttonTurn);
    }

    if (event.code === "ControlRight") {
      let buttonTurn = document.getElementById("right-ctrl");
      effectButtons(buttonTurn);
    }
/*-----------------------Buttons Component: NumberSection--------------------*/

    if (event.code === "NumLock") {
      let buttonTurn = document.getElementById("lock");
      effectButtons(buttonTurn);
    }

    if (event.code === "NumpadDivide") {
      let buttonTurn = document.getElementById("symbol-slash");
      effectButtons(buttonTurn);
    }

    if (event.code === "NumpadMultiply") {
      let buttonTurn = document.getElementById("symb-asterisk");
      effectButtons(buttonTurn);
    }

    if (event.code === "NumpadSubtract") {
      let buttonTurn = document.getElementById("pad-substract");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad7") {
      let buttonTurn = document.getElementById("numpad-7");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad8") {
      let buttonTurn = document.getElementById("numpad-8");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad9") {
      let buttonTurn = document.getElementById("numpad-9");
      effectButtons(buttonTurn);
    }

    if (event.code === "NumpadAdd") {
      let buttonTurn = document.getElementById("pad-plus");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad4") {
      let buttonTurn = document.getElementById("numpad-4");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad5") {
      let buttonTurn = document.getElementById("numpad-5");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad6") {
      let buttonTurn = document.getElementById("numpad-6");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad1") {
      let buttonTurn = document.getElementById("numpad-1");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad2") {
      let buttonTurn = document.getElementById("numpad-2");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad3") {
      let buttonTurn = document.getElementById("numpad-3");
      effectButtons(buttonTurn);
    }

    if (event.code === "NumpadEnter") {
      let buttonTurn = document.getElementById("pad-enter");
      effectButtons(buttonTurn);
    }

    if (event.code === "Numpad0") {
      let buttonTurn = document.getElementById("numpad-0");
      effectButtons(buttonTurn);
    }

    if (event.code === "NumpadDecimal") {
      let buttonTurn = document.getElementById("pad-point");
      effectButtons(buttonTurn);
    }

/*-----------------------Buttons Component: CenterSection--------------------*/
    if (event.code === "PrintScreen") {
      let buttonTurn = document.getElementById("");
      effectButtons(buttonTurn);
    }

    if (event.code === "ScrollLock") {
      let buttonTurn = document.getElementById("scroll");
      effectButtons(buttonTurn);
    }


    if (event.code === "Pause") {
      let buttonTurn = document.getElementById("pause");
      effectButtons(buttonTurn);
    }

    if (event.code === "Insert") {
      let buttonTurn = document.getElementById("insert");
      effectButtons(buttonTurn);
    }

    if (event.code === "Home") {
      let buttonTurn = document.getElementById("home");
      effectButtons(buttonTurn);
    }

    if (event.code === "PageUp") {
      let buttonTurn = document.getElementById("up");
      effectButtons(buttonTurn);
    }

     if (event.code === "Delete") {
      let buttonTurn = document.getElementById("del");
      effectButtons(buttonTurn);
    }

    if (event.code === "End") {
      let buttonTurn = document.getElementById("end");
      effectButtons(buttonTurn);
    }

    if (event.code === "PageDown") {
      let buttonTurn = document.getElementById("down");
      effectButtons(buttonTurn);
    }

    if (event.code === "ArrowUp") {
      let buttonTurn = document.getElementById("up-arrow");
      effectButtons(buttonTurn);
    }

    if (event.code === "ArrowLeft") {
      let buttonTurn = document.getElementById("left-arrow");
      effectButtons(buttonTurn);
    }

    if (event.code === "ArrowDown") {
      let buttonTurn = document.getElementById("down-arrow");
      effectButtons(buttonTurn);
    }

    if (event.code === "ArrowRight") {
      let buttonTurn = document.getElementById("right-arrow");
      effectButtons(buttonTurn);
    }

    /*-----------------------Buttons Component: FunctionsSection--------------------*/

    if (event.code === "Escape") {
      let buttonTurn = document.getElementById("esc");
      effectButtons(buttonTurn);
    }

    if (event.code === "F1") {
      let buttonTurn = document.getElementById("function-1");
      effectButtons(buttonTurn);
    }

    if (event.code === "F2") {
      let buttonTurn = document.getElementById("function-2");
      effectButtons(buttonTurn);
    }

    if (event.code === "F3") {
      let buttonTurn = document.getElementById("function-3");
      effectButtons(buttonTurn);
    }

    if (event.code === "F4") {
      let buttonTurn = document.getElementById("function-4");
      effectButtons(buttonTurn);
    }

    if (event.code === "F5") {
      let buttonTurn = document.getElementById("function-5");
      effectButtons(buttonTurn);
    }

    if (event.code === "F6") {
      let buttonTurn = document.getElementById("function-6");
      effectButtons(buttonTurn);
    }

    if (event.code === "F7") {
      let buttonTurn = document.getElementById("function-7");
      effectButtons(buttonTurn);
    }

    if (event.code === "F8") {
      let buttonTurn = document.getElementById("function-8");
      effectButtons(buttonTurn);
    }

    if (event.code === "F9") {
      let buttonTurn = document.getElementById("function-9");
      effectButtons(buttonTurn);
    }

    if (event.code === "F10") {
      let buttonTurn = document.getElementById("function-10");
      effectButtons(buttonTurn);
    }

    if (event.code === "F11") {
      let buttonTurn = document.getElementById("function-11");
      effectButtons(buttonTurn);
    }

    if (event.code === "F12") {
      let buttonTurn = document.getElementById("function-12");
      effectButtons(buttonTurn);
    }
  });
}
