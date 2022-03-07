import React from "react";
import About from "./About";


class Header extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            scrolled: false
          }
        this.mareF = React.createRef();
        this.maref2 = React.createRef();
        this.maref3 = React.createRef();
        this.onScrollHandler = this.onScrollHandler.bind(this);
    }
    onScrollHandler() {
        const offset = window.pageYOffset;
        if (
          offset > 10 &&
          !this.state.scrolled
        ) {
          this.setState({
            scrolled: true
          });
        } else if (
          offset <= 10 &&
          this.state.scrolled
        ) {
          this.setState({
            scrolled: false
          });
        }
        {
        this.state.scrolled && this.mareF.current.classList.add("scrolled") 
        this.state.scrolled && this.maref2.current.classList.add("scrolled2");
        this.state.scrolled && document.getElementById("kadot").classList.add("kadote2")
      
            
        !this.state.scrolled && this.mareF.current.classList.remove("scrolled");
        !this.state.scrolled && this.maref2.current.classList.remove("scrolled2");
        !this.state.scrolled && document.getElementById("kadot").classList.remove("kadote2")
        
            
           
          
        }
      
        
    
    
    }
    
    componentDidMount() { 
        window.addEventListener("scroll", this.onScrollHandler);
        
     }
    
    




    render(){
        return(
          
            
          <div className="col-md-12">
            <div className="row mt-2" ref={this.maref3}>
            <div className="col-md-6 logo" ref={this.mareF}>
              <h3 className="bird">Nas_Tech <span className="kadot" id="kadot">.</span></h3>
              </div>
             
             

                <div className="col-md-6 " ref={this.maref2}>
                <ul className="nav">
                        <li className="pr-2 nav-link"> home</li>
                        <li className="pr-2 nav-link"> about</li>
                        <li className="pr-2 nav-link"> contact</li>
                    </ul>
                </div>
            </div>
              
                    
                

               
            </div>
        )
    }
}

export default Header;