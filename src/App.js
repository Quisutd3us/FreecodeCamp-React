import './App.css';
import logoFreeCodeCamp from './images/freeCodeCampLogo.png'

// import components
import ClickButton from "./modules/ClickButton";
import Counter from "./modules/Counter";

function App() {
  let manageClick = () => {
    return
  }
  let resetClick = () => {
    return console.log('reset')
  }
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
                numClicks={5}
            />
          </div>
          <ClickButton
              btnText={'Add+'}
              isBtnClick={true}
              manageClick={manageClick}
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
