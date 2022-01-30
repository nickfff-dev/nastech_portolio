import React from 'react'
import './Fronth.css'


class Fronth extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
            <header className="masthead ">
    <div className="container-fluid">
        <div className="row align-items-center">
            <div className="col-md">
                <h1 className="col-md- mb-4">Full Stack Dev</h1>
                <h2 className="col-md- mb-0">I am a full stack software developer with more than 5000 <br/>hours building, maintaining and deploying web applications <br/>I can adapt onto any
                                    technology rapidly hence I'm flexible with <br/> any tech stack. Im a passionate, diligent dev who learns continuously. </h2>
            </div>
            <div className="col- ">
                <div className="row py-4 px-5 mt-5 masthead-cards">
                    <div className="row d-flex ">
                        <a href="#" className="w-30 pb-4">
                            <div className="card border-0 border-bottom-red shadow-lg shadow-hover">
                                <div className="card-body text-center">
                                    <div className="text-center">
                                    <i class="fa-4x fa fa-laptop-code my-1"></i>
                                    </div>
                                    Front End
                                </div>
                            </div>
                        </a>
                        <a href="#" className="w-30 px-4  pb-4 ">
                            <div className="card border-0 border-bottom-blue shadow-lg shadow-hover">
                                <div className="card-body text-center">
                                    <div className="text-center">
                                    <i className="fa-4x fa fa-window-restore my-1"></i>
                                    </div>
                                    Back End
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="row d-flex">
                        <a href="#" className="w-30 px-4  pb-4">
                            <div className="card border-0 border-bottom-yellow shadow-lg shadow-hover">
                                <div className="card-body text-center">
                                    <div className="text-center">
                                    <i class="fa-4x fa fa-cogs my-1"></i>
                                    </div>
                                   Dev Ops
                                </div>
                            </div>
                        </a>
                       
                        <a href="#" className="w-30 pb-4">
                            <div className="card border-0 border-bottom-green shadow-lg shadow-hover">
                                <div className="card-body text-center">
                                    <div className="text-center">
                                        <i className="fa fa-4x fa-list my-1"></i>
                                    </div>
                                   Scripting
                                </div>
                            </div>
                        </a>
                      
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  
</header>
        )
    }
}



export default Fronth