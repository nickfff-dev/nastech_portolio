import React, { Component } from 'react';
import yetu from "./hf2.svg"
import Devicons from './Devicons';
import { Row, Col, Container, Card, CardBody, CardTitle, CardText, Button, } from 'react-bootstrap'

class Home extends Component {

    constructor(props) {
        super(props)

    }
	



    render() {
        return (
            <Container className="mb-5 h-75">
                <div className="d-flex flex-row align-items-center justify-content-evenly">
                           
                    <Container>
						<h4> Intro</h4>
						
                        <p>
                            I am a Full Stack Web Developer with  a passion for creating
                            beautiful  and intuitive user experiences. I have a
                            background in Graphic Design and  a love for creating
							beautiful and intuitive user experiences.
							
                            I am a Full Stack Web Developer with  a passion for creating
                            beautiful  and intuitive user experiences. I have a
                            background in Graphic Design and  a love for creating
                            beautiful and intuitive user experiences.
                        </p>
                        <div className="text-left">
				<Devicons/>
				</div>
                    </Container>
                    <Container className="mt-5">
		             <img src={yetu} alt="yetu" className="img-fluid" />
                         
					</Container>
					
                    
				</div>
			
                
                
            </Container>
        );
    }
}

export default Home;