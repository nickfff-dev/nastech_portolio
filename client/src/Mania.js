import React, { Component } from 'react';
import anime from "animejs/lib/anime.es.js"


class Mania extends Component {


    componentDidMount() {
        

        var tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 4800,
            loop: true
            
        });
        
        tl
        .add({
                targets: "#Layer_1 path",
                strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 4500,
                delay: function(el, i) { return i * 250 },
            
                direction: 'normal',
                loop: true
        })
        
        .add({
            targets: "#Layer_1 rect",
            
            strokeDashoffset: [anime.setDashoffset, 1],
        easing: 'easeInOutSine',
        duration: 4500,
            delay: function(el, i) { return i * 250 },
        
            direction: 'alternate',
            loop: true
        })

        .add({
            targets: "#Layer_1 polygon",
            
            strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 4500,
            delay: function(el, i) { return i * 250 },
        
            direction: 'normal',
            loop: true
        })
        

            
        
        


                                    
}



    render() {
        return (
            
            <div>
              
 

              </div>
        );
    }
}

export default Mania;