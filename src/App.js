import './App.css';
import Testimony from "./components/Testimony";
function App() {
  return (
    <div className="App">
      <div className={'container-main'}>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony
            nameStudent={'Shawn Wang'}
            country={'Singapore'}
            job={'Software Engineer'}
            enterprise={'Amazon'}
            resumeStudent={'It\'s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer.'}
            imageStudent={'Shawn'}
        />
        <Testimony
            nameStudent={'Sarah Chima'}
            country={'Nigeria'}
            job={'Software Engineer'}
            enterprise={'ChatDesk'}
            resumeStudent={'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'}
            imageStudent={'Sarah'}
        />
        <Testimony
            nameStudent={'Emma Bostian'}
            country={'Sweden'}
            job={'Software Engineer'}
            enterprise={'Spotify'}
            resumeStudent={'I\'ve always struggled with learning JavaScript. I\'ve taken many courses but freeCodeCamp\'s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify'}
            imageStudent={'Emma'}
        />
      </div>
    </div>
  );
}

export default App;
