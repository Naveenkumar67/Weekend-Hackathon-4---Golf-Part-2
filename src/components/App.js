import React, { Component, useEffect, useState } from "react";
import '../styles/App.css';

const App = ()=> {
    const [renderBall,setRenderBall]=useState(false);
    const [posi,setPosi]=useState(0);
    const [ballPosition,setBallPosition]=useState({left:0,top:0})
    const buttonClickHandler = () =>{
             setRenderBall(true);
   }
   const eventHandler=(event)=>{
    switch(event.keyCode){
        case 39:
            setBallPosition({
                left:ballPosition.left + 5,
                top:ballPosition.top,
            });
            break;
        case 38:
            setBallPosition({
                left:ballPosition.left,
                top:ballPosition.top-5,
                //position:"absolute",
            });
            break;
        case 37:
               setBallPosition({
                   left:ballPosition.left-5,
                   top:ballPosition.top,
               });
               break;
        case 40:
            setBallPosition({
                left:ballPosition.left,
                top:ballPosition.top+5,
            });
            break;
       default:
           setBallPosition({
               left:ballPosition.left,
               top:ballPosition.top,
           });
           break;           


    }
   }
   useEffect(()=>{
    document.addEventListener("keydown",eventHandler);
    return ()=>{
        document.removeEventListener("keydown",eventHandler);
    }
    
},[ballPosition]);
 
const reset=()=>{
    let b=renderBall;
    b=false;
    setRenderBall(b);
    let c=ballPosition;
    c.left=0;
    c.top=0;
    setBallPosition(c);
}   


const renderBallOrButton = () => {
		if (renderBall) {
		    return <div className="ball" 
            style={{
                left:ballPosition.left + "px",
                top:ballPosition.top +"px",
                position:"absolute",
            }}></div>
		} else {
		    return <button onClick={buttonClickHandler} className="start" >start</button>
		}
}

   


   
        return (
            <div className="playground">
                {renderBallOrButton()}
                <button className="reset" onClick={reset}>Reset</button>;
            </div>
            
        )
    
}


export default App;
