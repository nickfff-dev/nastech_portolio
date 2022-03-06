import Home from './Home';
import About from './About';

import Devicons from './Devicons'
import Fronth from './Fronth';
import { Parallax, Background} from 'react-parallax';
import image1 from "./sectionsbg.png"



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
         
        </div>
      </Parallax>
      <h2>| | |</h2>
      <Parallax
        bgImage={image1}
        bgImageAlt="image2"
        strength={500}
        
      
      >
        <div style={{ height: "500px" }}>
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
