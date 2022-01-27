import React from "react";
import Logo from './logo.png'

class Home extends React.Component{
    constructor(props){
        super(props)
    }





    render(){
        return(
            <div className="row">
                <div className="col-md-4">
                    <img className="img=fluid"  src={Logo}/>
                  
                </div>
                <div className="col-md-6 col-md-offset-2">

                </div>
                
            </div>
        )
    }
}