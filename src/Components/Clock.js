import React from 'react'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function Clock() {

    const [second, setsecond] = useState(0);
    const [minute, setminute] = useState(0);
    const [hour, sethour] = useState(0);
    
    let time= new Date().toLocaleTimeString();

    useEffect(()=>{

       const interval= setInterval(
           ()=>{setsecond(second => second+1)}
           ,1000);

     return () => clearInterval(interval);
    },[]);

    if(second===60){
        setminute(minute=>minute+1);
        setsecond(0);
    }
    if(minute===60){
        sethour(hour=>hour+1);
        setminute(0);
    }

    return ( 
        <div className=" d-flex justify-content-center align-items-center" style={{height:'200px', width:'500px'}}>
         <h1>
         Clock=
         
         {hour}:{minute}:{second}
         </h1> 
        
        </div>
    )
}

export default Clock


// BrowserRouter as Router 


// <Router>

// 	<Switch>
// 		<Route exact path='/'  >
// 			<Component/>
// 		</Route>
		
// 		<Route exact path='/next'  >
// 			<Component2/>
// 		</Route>

// 		<Route exact path='/pre'  >
// 			<Component3/>
// 		</Route>

		
// 	<Switch>


// <Router></Router>
