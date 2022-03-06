import Home from './Home';
import About from './About';

import Devicons from './Devicons'
import Fronth from './Fronth';
import { Parallax} from 'react-parallax';
import image1 from "./sectionsbg.jpg"
import image2 from "./5197240.svg"
import image3 from "./headers.svg"



function App() {
  return (
    <div className="App">
   
      <Parallax
        bgImage={image3}
        bgImageAlt="image1"
        strength={500}
        className="container-fluid"
      
        
      
      >
         <div style={{ height: "1000px" }}>
         
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax
         bgImage={image2}
        strength={500}
        
      
      >
        <div style={{ height: "500px" }}>
          <Devicons/>
          <About/>
        </div>
        
        
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image1}
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
