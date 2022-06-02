import React from 'react'

import ReactTooltip from 'react-tooltip'


class Devicons extends React.Component{
    render(){
        return(
        
           

            

<div  className="mt-5 ">
<ReactTooltip type = 'info' textColor="white" backgroundColor="#00755E"  arrowColor="white" />

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
  {/* <hr className=" text-center"/> */}
</div>
    

    

        )
    }
}


export default Devicons