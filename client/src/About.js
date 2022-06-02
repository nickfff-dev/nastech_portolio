import React from "react";

import {
  Col, Row, Container, 
} from "react-bootstrap"

import {Image} from "react-bootstrap"





class About extends React.Component {





  render() {
    return (
      <Container className="mb-4">
        <h1 className='text-center mb-5'>Sample Works: </h1>
         
          <Row>
            <div className="d-flex align-items-center justify-content-around">
            
              <Col className='text-center'>
                <Image src="https://source.unsplash.com/220x220/?github" thumbnail={true} alt="yetu" fluid={true} roundedCircle={true} />
                <h4> project 1</h4>
              <p className="card-text">a small description of the project
              </p>
              </Col>
              <Col className='text-center'>
                <Image src="https://source.unsplash.com/220x220/?website" thumbnail={true} alt="yetu" fluid={true} roundedCircle={true} />
                <h4> project 2</h4>
              <p className="card-text">a small description of the project</p>
              </Col>
              <Col className='text-center'>
                <Image src="https://source.unsplash.com/220x220/?computer" thumbnail={true} alt="yetu" fluid={true} roundedCircle={true} />
                <h4> project 3</h4>
              <p className="card-text">a small description of the project</p>
              </Col>
              <Col className='text-center'>
                <Image src="https://source.unsplash.com/220x220/?coding" thumbnail={true} alt="yetu" fluid={true} roundedCircle={true} />
              <h4> project 4</h4>
              <p className="card-text">a small description of the project</p>
              
              </Col>
               

              </div>
       
            
         
        </Row>
      
        
</Container>
     
    )
  }
}

export default About;