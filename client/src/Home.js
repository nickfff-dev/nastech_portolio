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
              <div className="col-md- ">
              <img className="img-fluid logo"  src={Logo}/>
              </div>
             
                <div className="mt-3  col-sm title ">
                
                    <h1 className="bird">UI BIRD</h1>

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