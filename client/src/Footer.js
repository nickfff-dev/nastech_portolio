import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
          

<footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        
            
            
                <ul className="list-unstyled">
                    <li className="d-inline pe-5"><i type="button" className=" fa fa-reddit" href="#!"></i></li>
                    <li className="d-inline pe-5"><i type="button" className=" fa fa-twitter" href="#!"></i></li>
                    <li className="d-inline pe-5"><i type="button" className=" fa fa-envelope" href="#!"></i></li>
                </ul>
           
        
    </div>

    <div className="footer-copyright text-center py-3  ">© 2022 Copyright:
        <a className="text-decoration-none text-white" href="https://mdbootstrap.com/"> Nickson as Nas_tech</a>
    </div>

</footer>

                
           
        );
    }
}

export default Footer;