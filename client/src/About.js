import React from "react";

import {
  Col, Row, Container, 
} from "react-bootstrap"

import {Image} from "react-bootstrap"





class About extends React.Component {





  render() {
    return (
      <Container className="mb-4 pt-5">
       
        <div className="container h-75">
  <div className="row align-middle">
    <div className="col-md-6 col-lg-4 column">
      <div className="card gr-1">
        <div className="txt">
          <h1>SCRIPTING AND <br/>
AUTOMATION</h1>
          <p>Python for scripts and automation</p>
        </div>
        <a href="https://github.com/nickfff-dev/tweetretweetlikereplywithfilterstweepybot">more</a>
        <div className="ico-card">
        <i className="fa fa-rebel"></i>
      </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 column">
      <div className="card gr-2">
        <div className="txt">
          <h1>Web Front-End <br/>
MAINTENANCE</h1>
          <p>Maintenance of already runnning websites</p>
        </div>
        <a href="https://wormwoodsociety.org/">more</a>
      <div className="ico-card">
        <i className="fa fa-codepen"></i>
      </div>
      </div>
    </div>
    <div className="col-md-6 col-lg-4 column">
      <div className="card gr-3">
        <div className="txt">
          <h1>UX/UI WEBsite <br/>AND WEB app</h1>
          <p>User Interface and User Experience Development.</p>
        </div>
        <a href="https://portaldefi.com/">more</a>
      <div className="ico-card">
        <i className="fa fa-empire"></i>
      </div>
      </div>
    </div>
    
  </div>
</div>
      
        
</Container>
     
    )
  }
}

export default About;