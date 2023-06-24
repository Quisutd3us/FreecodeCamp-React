import React from "react";
import '../css/counter.css'
function Counter({totalClicks}) {
  return (
      <div className={'counter-container'}>
        {totalClicks}
      </div>
  )
}

export default Counter