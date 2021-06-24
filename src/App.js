import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import Clock from './Components/Clock' ;
import Container from 'react-bootstrap/Container';
import Nav from './Components/Nav';
import Error from './Components/Error'
import { useEffect,useState } from 'react';
import Fulldata from './Components/Fulldata';
import { useReducer } from 'react';
import { MyContext } from './Context';


function App() {  

const [names, setNames] = useState([]);
const [count, setCount] = useState(8);
const [results, setResults] = useState([]);




const [state, dispatch] = useReducer(reducer, {note: "unknown" ,rows: 1,});

useEffect(() => {
  
  fetch('https://randomuser.me/api?results='+state.rows )
  .then((response)=>response.json())
  .then((json)=> json.results)
  .then((dataArray)=>dataArray.map((personobject)=>personobject.name))
  .then((namelist)=> setNames(namelist));

  // fetch('https://randomuser.me/api?results='+count )
  // .then((response)=>response.json())
  // .then((json)=> json.results)
  // .then((dataArray)=>setResults(dataArray));

  console.log("dis: ");

console.log(count);
}, [state]);


function reducer(state, action) {

  switch (action.type) {
    case "set":
      return action.numrows;
    default:
      throw new Error("invalid action");
  }
}




return (

<MyContext.Provider value= {{state, dispatch}} >
 <Router>
     <Switch>

        <Route exact path='/' >         
          <Nav names={names} count={count} setCount={setCount}/>
        </Route>

      <Route exact path='/nav'>
        <Clock />
      </Route>

      <Route exact path='/full'>
        <Fulldata array={results} />
      </Route>

      <Route >
        <Error msg="sorry there is nothing" />
      </Route>

     </Switch>
</Router>  
       </MyContext.Provider>
 
  );
}

export default App;
