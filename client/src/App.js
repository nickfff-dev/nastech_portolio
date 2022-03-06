import Home from './Home';
import About from './About';

import Devicons from './Devicons'
import Fronth from './Fronth';
import { Parallax } from 'react-parallax';
import image1 from "./79.jpg"
import image2 from "./1055.jpg"
import image3 from "./855_programming_website.jpg"


function App() {
  return (
    <div className="App">
     <Home/>
     <Fronth/>
     
      <About/>
      <Devicons />
      <Parallax
        bgImage={image1}
        bgImageAlt="image1"
        
      
      >
        
      </Parallax>
    
      
      
    </div>
  );
}

export default App;
