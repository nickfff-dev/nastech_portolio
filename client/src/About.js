import React from "react";






class About extends React.Component {





  render() {
    return (

      <div className='container-fluid  mt-5 '>
        <div className="row">
      
            <ul className="techs col-md-4">
              <h5 className="mb-1 stack">Front End</h5>
              <li><span > Javascript</span></li>
              <li><span> TypeScript</span></li>
              <li><span> React</span></li>
              <li><span> Vue</span></li>
              <li><span> HTML5</span></li>
              <li><span> CSS3</span></li>

            </ul>
          
      
            <ul className="techs col-md-4 ">
              <h5 class="mb-1 stack text-center">Back End</h5>
              <li><span>Nodejs</span></li>
              <li><span>Express.js</span></li>
              <li><span>MongoDB</span></li>
              <li><span>Mongoose</span></li>
              <li><span>Nodemailer</span></li>
              <li><span>NodeGeocoder</span></li>
            </ul>
          
          
            <ul className="techs col-md-4">
              <h5 class="mb-1 stack">Dev Ops</h5>
              <li><span>Git</span></li>
              <li><span>Github</span></li>
              <li><span>Heroku</span></li>
              <li><span>Digital Ocean</span></li>
              <li><span>Cloudinary</span></li>
              <li><span>AWS S3</span></li>
            </ul>
         
        </div>
      </div>
    )
  }
}

export default About;