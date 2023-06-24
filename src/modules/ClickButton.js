import React from "react";
import '../css/click-Button.css'

function clickButton({btnText, isBtnClick, manageClick}) {
  return (
      <button
          className={isBtnClick ? 'btn-Click' : 'btn-Reset'}
          onClick={manageClick}
      >
        {btnText}
      </button>
  )
}

export default clickButton