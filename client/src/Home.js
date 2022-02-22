import React from "react";
import Logo from './logo.png'
import About from "./About";


class Home extends React.Component{
    constructor(props){
        super(props)
    }





    render(){
        return(
            <div className="row  container-fluid">
              <div className="col  mt-4 ">
              <h3 className="bird">Nas_Tech <span>.</span></h3>
              </div>
             
             

                <div className="mt-3 col- mx-auto">
                    <ul className="nav row">
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