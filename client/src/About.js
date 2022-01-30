import React from "react";
import ReactTooltip from 'react-tooltip';






class About extends React.Component {


    


    render(){
        return(
   
        <div className='row'>

         
         
    




            <section>
  

<div className="row m-2">
    <div className="col-sm-4 mx-auto">
<a href="github.com/nickfff-dev" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 stack">Front End</h5>
      
    </div>
    <p class="mb-1">JavaScript, TypeScript, React,
Redux, Redux-Thunk/Saga, Vue, VueX,
HTML5, CSS3, Styled components,
SCSS, Webpack, Babel.</p>
  
  </a>
        
    </div>
    <div className="clearfix col-sm-4">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 stack">Back End:</h5>
      
    </div>
    <p class="mb-1">Node.js, Express.js, MongoDB,
Mongoose, Nodemailer, Node-Geocoder,
Stripe, Razorpay, Paypal API, Coinbase
commerce.</p>
    
  </a>

    </div>
    <div className="clearfix col-sm-4">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 stack">Dev Ops</h5>
      
    </div>
    <p class="mb-1 stack">
    Git, Github, Heroku, Digital Ocean,
Cloudinary, AWS S3, React Dev Tools, Redux
Dev tools, SSH, Continous
Deployment.
    </p>
  </a>
    </div>
</div>



   </section>
        </div>
  
            
        )
    }
}

export default About;