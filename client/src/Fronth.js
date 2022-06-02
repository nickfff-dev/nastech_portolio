import React from 'react'
import { Col, Row, Container, Card, CardBody, CardTitle, CardText, Button, } from 'react-bootstrap'

class Fronth extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
           
    <Container>
        <Row>
            <Col>
                <h1 >Introduction</h1>
                <h2>I am a full stack software developer with more than 5000 <br/>hours building, maintaining and deploying web applications <br/>I can adapt onto any
                                    technology rapidly hence I'm flexible with <br/> any tech stack. Im a passionate, diligent dev who learns continuously. </h2>
            </Col>
                    <Col>
                        <Container>
                            <Mania />
                            </Container>
               
            </Col>
        </Row>
    </Container>
  

        )
    }
}



export default Fronth