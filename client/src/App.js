import Home from './Home';
import About from './About';

import Devicons from './Devicons'
import Fronth from './Fronth';
import { Parallax, Background} from 'react-parallax';
import image1 from "./sectionsbg.jpg"
import image2 from "./1055.jpg"
import Mania from './Mania';
import image3 from "./855_programming_website.jpg"


function App() {
  return (
    <div className="App">
   
      <Parallax
        bgImage={image1}
        bgImageAlt="image1"
        strength={500}
        className="container-fluid"
        
      
      >
         <div style={{ height: "500px" }}>
         <Mania/>
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image2}
        bgImageAlt="image2"
        strength={500}
        
      
      >
        <div style={{ height: "500px" }}>
          <About/>
        </div>
        
        
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image3}
        bgImageAlt="image3"
        strength={500}
        
      
      > 
        <div style={{ height: "500px" }} className="row">
        
          <About/>
       
        </div>
        
      </Parallax>


      
    
      
      
    </div>
  );
}

export default App;
