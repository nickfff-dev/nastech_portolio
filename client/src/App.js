import Header from './Header';
import About from './About';
import React from 'react';
import Devicons from './Devicons'
import Fronth from './Fronth';
import { Parallax} from 'react-parallax';
import image1 from "./footer.svg"
import image2 from "./5197240.svg"
import image3 from "./ckj.svg"
import Home from './Home';



class App extends React.Component {
  constructor(props) {
    super(props) 
   
   
  }

 



  


  

    


  render() {
    
    return (
      <div className="container-fluid">
        <Header />
        <Parallax
          bgImage={image3}
          bgImageAlt="image1"
          strength={600}
          className ="mb-4"
    
          
        
          
        
        >
          <div style={{ height: "600px", width: "auto" }}>
            
            <Home/>
            
           
          </div>
        </Parallax>
        
        <Parallax
           bgImage={image2}
          strength={600}
          className ="mb-4"
          
        
        >
          <div style={{ height: "600px" }}>
           
            <About/>
          </div>
          
          
        </Parallax>
        
        <Parallax
          bgImage={image1}
          bgImageAlt="image3"
          strength={600}
          
        
        > 
          <div style={{ height: "600px" }} >
          
            <About/>
         
          </div>
          
        </Parallax>
  
  
        
      
        
        
      </div>
    );
  }
}

export default App;
