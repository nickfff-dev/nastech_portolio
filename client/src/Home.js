import React from "react";
import Logo from './logo.png'
import About from "./About";

class Home extends React.Component{
    constructor(props){
        super(props)
    }





    render(){
        return(
            <div className="row header container-fluid">
              <div className="col-md-4">
              <img className="img=fluid logo"  src={Logo}/>
              </div>
             
                <div className="mt-3  col-md-4 title mx-auto">
                
                    <h1 className="bird">UI BIRD</h1>
                    <h3 className="subheading">Full Stack Web Developer</h3>

                </div>

                <div className="mt-3  col-md-4 mx-auto">
                    <ul className="nav">
                        <li className="pr-2 nav-link"> home</li>
                        <li className="pr-2 nav-link"> about</li>
                        <li className="pr-2 nav-link"> contact</li>
                    </ul>
                </div>

               
            </div>
        )
    }
}

export default Home;