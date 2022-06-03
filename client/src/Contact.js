import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'react-bootstrap';
import axios from 'axios';

class Contact extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            name: '',
          email: '',
            subject: ''
        }
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) { 
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    onSubmitHandler(e) {

        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        axios.post('http://localhost:5000/api/sendMessage', data)
            .then((res) => {
                if (res.data === "Send email successfully") {
                    
                      alert("Message Sent.");
                      
                      
      
                  
                  }
                  else if (res.data === "email not sent") {
                      alert("invalid captcha please try again")
                      
                  }
            })
    }




    render() {
        return (
            <Container className="d-flex flex-column align-items-center mt-5 h-75 mb-5">
                <h1>Contact me via this form</h1>
            <Form className="w-50"  formMethod="POST" onSubmit={this.onSubmitHandler}>
                
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.onChangeHandler} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
                </Form.Text>
                <Form.Group className="" controlId="formBasicPassword">
                <Form.Label>subject</Form.Label>
              </Form.Group>
             <Form.Control type="text" placeholder="Enter subject" name="subject" value={this.state.subject} onChange={this.onChangeHandler} />
  
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>message</Form.Label>
    <Form.Control as="textarea" name ="message" value={this.state.message} rows={3} placeholder="type your message here" onChange={this.onChangeHandler}/>
  </Form.Group>
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>   
        );
    }
}

export default Contact;
