import './App.css';
import {useState} from "react";
import logoFreeCodeCamp from './images/freeCodeCampLogo.png'

// import components
import ClickButton from "./modules/ClickButton";
import Counter from "./modules/Counter";

function App() {
  const [numClicks, setNumClicks] = useState(0);
  let addClick = () => setNumClicks(numClicks + 1);
  let restClick = () => {
    if(numClicks>=1){
      setNumClicks(numClicks - 1)
    }else{
      setNumClicks(0)
    }
  };

  let resetClick = () => setNumClicks(0);

  return (
      <div className="App">
        <div className={'logoContainer'}>
          <img
              className={'logo'}
              src={logoFreeCodeCamp}
              alt={'logo'}
          />
        </div>
        <div className={'mainContainer'}>
          <div>
            <Counter
                totalClicks={numClicks}
            />
          </div>
          <ClickButton
              btnText={'+1'}
              isBtnClick={true}
              manageClick={addClick}
          />
          <ClickButton
              btnText={'-1'}
              isBtnClick={true}
              manageClick={restClick}
          />
          <ClickButton
              btnText={'Reset Counter'}
              isBtnClick={false}
              manageClick={resetClick}
          />
        </div>
      </div>
  );
}

export default App;
