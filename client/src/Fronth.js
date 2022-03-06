import React from 'react'
import './Fronth.css'
import Mania from './Mania'

class Fronth extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <header className="masthead ">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col">
                <h1 className="col-md- mb-4">Introduction</h1>
                <h2 className="col-md- mb-0">I am a full stack software developer with more than 5000 <br/>hours building, maintaining and deploying web applications <br/>I can adapt onto any
                                    technology rapidly hence I'm flexible with <br/> any tech stack. Im a passionate, diligent dev who learns continuously. </h2>
            </div>
                        <div className="col ">
                            <Mania/>
               
            </div>
        </div>
    </div>
  
</header>
        )
    }
}



export default Fronth