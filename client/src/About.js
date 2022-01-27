import React from "react";




class About extends React.Component {


    render(){
        return(
   <section>
                    <div className="media col-sm-5 mt-4 mx-auto">
  <div className="media-body mt-4 mx-auto ">
    <p>I am a MERN stack developer with more
than 5000 hours of building, maintaining and
deploying single page
applications, scripts, bots and scrapers. I adapt to any
technology rapidly hence  flexibility. A passionate, diligent dev
who seeks to learn continuously.</p>
  </div>
</div>
<div className="mx-auto col-sm-5" >
    <ul className="list ">
   <li > <i  className="devicons devicons-github">
       </i>  </li>
    <li> <i className="devicons devicons-react">
         </i>  </li>
    <li> <i className="devicons devicons-nodejs">
            </i>  </li>

    <li> <i className="devicons devicons-javascript">
            </i>  </li>
    
    <li> <i className="devicons devicons-html5">
            </i>  </li>
    <li> <i className="devicons devicons-mongodb">
            </i>  </li>

    <li> <i className="devicons devicons-python"></i> </li>
    <li> <i className="devicons devicons-angular"></i> </li>
    <li> <i className="devicons devicons-npm"></i> </li>
    <li> <i className="devicons devicons-aws"></i> </li>
    <li> <i className="devicons devicons-heroku"></i> </li>
  

    </ul>
</div>
<div className="row m-0">
    <div className="col-sm-4 mx-auto">
        <>Frontend</>
<p>
JavaScript, TypeScript, React,
Redux, Redux-Thunk/Saga, Vue, VueX,
HTML5, CSS3, Styled components,
SCSS, Webpack, Babel.
</p>

        
       
       
        
    </div>
    <div className="col-sm-4">
    <>Back end:</>
<p>
 Node.js, Express.js, MongoDB,
Mongoose, Nodemailer, Node-Geocoder,
Stripe, Razorpay, Paypal API, Coinbase
commerce,
</p>
    </div>
    <div className="col-sm-4">
    <>DevOps:</>
<p>
Git, Github, Heroku, Digital Ocean,
Cloudinary, AWS S3, React Dev Tools, Redux
Dev tools, SSH, Unit testing, Intergration
testing, Continous Integration/Continous
Deployment.
</p>
    </div>
</div>
   </section>
            
        )
    }
}

export default About;