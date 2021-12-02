import React, { useState } from 'react';
import '../App.css'

function Digital_Clock(){

    let time = new Date().toLocaleTimeString();

    const [ctime, setctime] = useState(time);
   
    const UpdateTime = () => {

        time = new Date().toLocaleTimeString();
      
      setctime(time);

    };
    setInterval(UpdateTime,1000)
  

    return (
        <div className={"me"}>
        <div style={{textAlign: "center"}}>
            <div style={{textAlign:"center"}}>
            <h1 className="temp1">Digital Clock</h1>
            </div>
<div className="me1">
              <h2 className="temp">{ ctime }</h2>
              </div>
        </div>
        </div>
    )
}

export default Digital_Clock;