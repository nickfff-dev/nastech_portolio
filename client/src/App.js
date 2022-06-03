import Header from './Header';
import About from './About';
import React from 'react';
import Contact from './Contact';
import Footer from './Footer';

import Home from './Home';
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, Button, } from 'react-bootstrap'



class App extends React.Component {
  constructor(props) {
    super(props) 
   
   
  }

 



  


  

    


  render() {
    
    return (
      <Container>
        <Header /> 
            <Home/>
            
           
          
       
          

            <About/>
          <Contact/>
          
          
       
        
          
         
         
          
          
       
  
  <Footer/>
        
      
        
        
      </Container>
    );
  }
}

export default App;
