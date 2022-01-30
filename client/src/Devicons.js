import React from 'react'
import { Component } from "react";
import ReactTooltip from 'react-tooltip'


class Devicons extends React.Component{
    render(){
        return(
        
           
         
  
<div id="flick" className="flicking-viewport text-center ">
<ReactTooltip />
  <div className="flicking-camera">
    <span className=" btn ml-2 is-white devicons devicons-github" ref={ref => this.fooRef = ref} data-tip='github' onClick={() => { ReactTooltip.hide(this.fooRef) }}>    </span>
  
       
   <span className=" btn button ml-4 is-white devicons devicons-react" ref={ref => this.fooRef = ref} data-tip='react' onClick={() => { ReactTooltip.hide(this.fooRef) }} > </span>
   <span className=" btn button ml-4 is-white devicons devicons-nodejs" ref={ref => this.fooRef = ref} data-tip='node-js' onClick={() => { ReactTooltip.hide(this.fooRef) }}>  </span>

   <span className=" btn button ml-4 is-white devicons devicons-javascript" ref={ref => this.fooRef = ref} data-tip='javascript'onClick={() => { ReactTooltip.hide(this.fooRef) }}>  </span>
   
   <span className=" btn button ml-4 is-white devicons devicons-mongodb" ref={ref => this.fooRef = ref} data-tip='mongodb' onClick={() => { ReactTooltip.hide(this.fooRef) }}> 
   
   </span>

   <span className=" btn button ml-4 is-white devicons devicons-python" ref={ref => this.fooRef = ref} data-tip='python' onClick={() => { ReactTooltip.hide(this.fooRef) }}>  </span>
   <span className="btn button ml-4 is-white devicons devicons-angular" ref={ref => this.fooRef = ref} data-tip='angular' onClick={() => { ReactTooltip.hide(this.fooRef) }}>   </span>
   <span className="btn button ml-4 is-white devicons devicons-npm" ref={ref => this.fooRef = ref} data-tip='npm' onClick={() => { ReactTooltip.hide(this.fooRef) }}>  </span>
   <span className="btn button ml-4 is-white devicons devicons-aws" ref={ref => this.fooRef = ref} data-tip='aws' onClick={() => { ReactTooltip.hide(this.fooRef) }}></span>
   <span className="btn button ml-4 is-white devicons devicons-heroku" ref={ref => this.fooRef = ref} data-tip='heroku' onClick={() => { ReactTooltip.hide(this.fooRef) }}>   </span>
  </div>
</div>
    

    

        )
    }
}


export default Devicons